import { Resume } from "../models/resume.model.js";
import { Analysis } from "../models/analysis.model.js";
import PDFDocument from "pdfkit";


// ==========================================
// ANALYZE RESUME
// ==========================================

export const analyzeResume = async (req, res) => {
    try {
        // ==========================================
        // GET LATEST RESUME
        // ==========================================

        const resume = await Resume.findOne({
            userId: req.user.userId
        }).sort({ createdAt: -1 });

        if (!resume) {
            return res.status(404).json({
                message: "No resume found. Please upload a resume first."
            });
        }

        if (
            !resume.resumeText ||
            resume.resumeText.trim().length === 0
        ) {
            return res.status(400).json({
                message: "Resume text is not available."
            });
        }

        const text = resume.resumeText;
        const lowerText = text.toLowerCase();


        // ==========================================
        // 1. BASIC RESUME SECTIONS
        // ==========================================

        const sections = {
            contact: false,
            education: false,
            skills: false,
            experience: false,
            projects: false,
            certifications: false
        };

        const sectionKeywords = {
            contact: [
                "email",
                "phone",
                "mobile",
                "linkedin",
                "github"
            ],

            education: [
                "education",
                "b.tech",
                "btech",
                "bachelor",
                "degree",
                "university",
                "college"
            ],

            skills: [
                "skills",
                "technical skills",
                "technologies"
            ],

            experience: [
                "experience",
                "internship",
                "intern",
                "work experience"
            ],

            projects: [
                "projects",
                "project"
            ],

            certifications: [
                "certification",
                "certifications",
                "certificate"
            ]
        };

        for (const section in sectionKeywords) {
            sections[section] =
                sectionKeywords[section].some(
                    keyword =>
                        lowerText.includes(keyword)
                );
        }


        // ==========================================
        // 2. SKILLS DETECTION
        // ==========================================

        const skillList = [
            "c++",
            "c",
            "java",
            "python",
            "javascript",
            "typescript",
            "react",
            "node.js",
            "nodejs",
            "express",
            "html",
            "css",
            "tailwind",
            "bootstrap",
            "mongodb",
            "mysql",
            "sql",
            "git",
            "github",
            "rest api",
            "machine learning",
            "scikit-learn",
            "numpy",
            "pandas",
            "docker",
            "aws"
        ];

        const detectedSkills =
            skillList.filter(skill =>
                lowerText.includes(
                    skill.toLowerCase()
                )
            );


        // ==========================================
        // 3. IMPORTANT KEYWORDS
        // ==========================================

        const keywordList = [
            "problem solving",
            "data structures",
            "algorithms",
            "object oriented programming",
            "database",
            "api",
            "teamwork",
            "communication",
            "leadership",
            "debugging",
            "software development",
            "testing"
        ];

        const detectedKeywords =
            keywordList.filter(keyword =>
                lowerText.includes(keyword)
            );


        // ==========================================
        // 4. RESUME LENGTH
        // ==========================================

        const wordCount = text
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .length;


        // ==========================================
        // 5. ATS SCORE
        // ==========================================

        let score = 0;

        const sectionScore =
            Object.values(sections)
                .filter(Boolean)
                .length * 5;

        score += sectionScore;


        const skillScore = Math.min(
            detectedSkills.length * 2.5,
            25
        );

        score += skillScore;


        const keywordScore = Math.min(
            detectedKeywords.length * 1.25,
            15
        );

        score += keywordScore;


        let lengthScore = 0;

        if (
            wordCount >= 300 &&
            wordCount <= 1200
        ) {
            lengthScore = 15;

        } else if (
            wordCount >= 200 &&
            wordCount < 300
        ) {
            lengthScore = 10;

        } else if (
            wordCount > 1200 &&
            wordCount <= 1600
        ) {
            lengthScore = 10;

        } else if (wordCount >= 100) {
            lengthScore = 5;
        }

        score += lengthScore;


        let contactScore = 0;

        if (sections.contact) {
            contactScore = 15;
        }

        score += contactScore;

        score = Math.min(
            Math.round(score),
            100
        );


        // ==========================================
        // 6. INTERVIEW READINESS SCORE
        // ==========================================

        let interviewScore = 0;

        if (sections.skills) {
            interviewScore += 20;
        }

        if (sections.projects) {
            interviewScore += 20;
        }

        if (sections.experience) {
            interviewScore += 15;
        }

        if (sections.education) {
            interviewScore += 10;
        }

        if (sections.certifications) {
            interviewScore += 10;
        }

        const skillReadinessScore =
            Math.min(
                detectedSkills.length * 2,
                15
            );

        interviewScore += skillReadinessScore;

        const keywordReadinessScore =
            Math.min(
                detectedKeywords.length,
                10
            );

        interviewScore +=
            keywordReadinessScore;

        interviewScore = Math.min(
            Math.round(interviewScore),
            100
        );


        // ==========================================
        // 7. EXTRACT DETAILED RESUME INFORMATION
        // ==========================================

        const normalizeLines = (value) => {
            return value
                .split("\n")
                .map(line => line.trim())
                .filter(
                    line => line.length > 2
                );
        };


        const extractSection = (
            sectionNames
        ) => {
            const lines =
                normalizeLines(text);

            const startIndex =
                lines.findIndex(line => {
                    const normalized =
                        line
                            .toLowerCase()
                            .replace(
                                /[^a-z\s]/g,
                                ""
                            )
                            .trim();

                    return sectionNames.some(
                        section =>
                            normalized === section ||
                            normalized.startsWith(
                                section + " "
                            )
                    );
                });

            if (startIndex === -1) {
                return [];
            }

            const stopSections = [
                "summary",
                "objective",
                "profile",
                "education",
                "skills",
                "technical skills",
                "experience",
                "work experience",
                "internship",
                "projects",
                "certifications",
                "achievements",
                "awards",
                "languages",
                "interests"
            ];

            const result = [];

            for (
                let i = startIndex + 1;
                i < lines.length;
                i++
            ) {
                const currentLine =
                    lines[i]
                        .toLowerCase()
                        .replace(
                            /[^a-z\s]/g,
                            ""
                        )
                        .trim();

                const isNextSection =
                    stopSections.some(
                        section =>
                            currentLine === section ||
                            currentLine.startsWith(
                                section + " "
                            )
                    );

                if (isNextSection) {
                    break;
                }

                result.push(lines[i]);
            }

            return result;
        };


        // ==========================================
        // SUMMARY
        // ==========================================

        const summarySection =
            extractSection([
                "summary",
                "objective",
                "profile",
                "professional summary",
                "career objective"
            ]);

        const summary =
            summarySection.length > 0
                ? summarySection.join(" ")
                : "";


        // ==========================================
        // PROJECTS
        // ==========================================

        const projects =
            extractSection([
                "projects",
                "project",
                "academic projects",
                "personal projects"
            ]);


        // ==========================================
        // EXPERIENCE
        // ==========================================

        const experience =
            extractSection([
                "experience",
                "work experience",
                "professional experience",
                "internship",
                "internships"
            ]);


        // ==========================================
        // ACTION VERBS
        // ==========================================

        const actionVerbList = [
            "developed",
            "designed",
            "implemented",
            "created",
            "built",
            "managed",
            "led",
            "optimized",
            "improved",
            "analyzed",
            "tested",
            "integrated",
            "deployed",
            "automated",
            "configured",
            "maintained",
            "collaborated",
            "engineered",
            "debugged",
            "performed",
            "achieved",
            "organized",
            "researched",
            "trained",
            "evaluated"
        ];

        const actionVerbs =
            actionVerbList.filter(
                verb =>
                    lowerText.includes(verb)
            );


        // ==========================================
        // 8. SUGGESTIONS
        // ==========================================

        const suggestions = [];

        if (!sections.contact) {
            suggestions.push(
                "Add complete contact information such as email, phone, LinkedIn or GitHub."
            );
        }

        if (!sections.education) {
            suggestions.push(
                "Add a clear Education section."
            );
        }

        if (!sections.skills) {
            suggestions.push(
                "Add a dedicated Technical Skills section."
            );
        }

        if (!sections.experience) {
            suggestions.push(
                "Add internship or work experience if applicable."
            );
        }

        if (!sections.projects) {
            suggestions.push(
                "Add relevant projects with clear descriptions and technologies used."
            );
        }

        if (!sections.certifications) {
            suggestions.push(
                "Consider adding relevant certifications if available."
            );
        }

        if (!summary) {
            suggestions.push(
                "Add a short professional summary or career objective."
            );
        }

        if (actionVerbs.length < 3) {
            suggestions.push(
                "Use stronger action verbs such as developed, implemented, designed, optimized, and analyzed."
            );
        }

        if (detectedSkills.length < 5) {
            suggestions.push(
                "Include more relevant technical skills and technologies."
            );
        }

        if (wordCount < 300) {
            suggestions.push(
                "Your resume appears short. Add relevant project, experience and achievement details."
            );
        }

        if (wordCount > 1200) {
            suggestions.push(
                "Your resume is quite long. Consider removing unnecessary information."
            );
        }


        // ==========================================
        // 9. RESUME HEALTH
        // ==========================================

        let health =
            "Needs Improvement";

        if (score >= 80) {
            health = "Excellent";
        } else if (score >= 65) {
            health = "Good";
        } else if (score >= 50) {
            health = "Average";
        }


        // ==========================================
        // 10. SAVE ANALYSIS HISTORY
        // ==========================================

        const shouldRecord =
            req.query.record === "true";

        if (shouldRecord) {
            await Analysis.create({
                userId: req.user.userId,
                resumeId: resume._id,
                atsScore: score,
                resumeHealth: health,
                interviewReadiness:
                    interviewScore,
                wordCount,
                sections,
                detectedSkills,
                detectedKeywords,
                suggestions,
                summary,
                projects,
                experience,
                actionVerbs
            });
        }


        // ==========================================
        // 11. COUNT TODAY'S ANALYSES
        // ==========================================

        const startOfDay = new Date();

        startOfDay.setHours(
            0,
            0,
            0,
            0
        );

        const endOfDay = new Date();

        endOfDay.setHours(
            23,
            59,
            59,
            999
        );

        const todayAnalysisCount =
            await Analysis.countDocuments({
                userId: req.user.userId,
                createdAt: {
                    $gte: startOfDay,
                    $lte: endOfDay
                }
            });


        // ==========================================
        // 12. RESPONSE
        // ==========================================

        return res.status(200).json({
            message:
                "Resume analyzed successfully",

            resumeId: resume._id,

            fileName:
                resume.fileName,

            atsScore:
                score,

            resumeHealth:
                health,

            interviewReadiness:
                interviewScore,

            todayAnalysisCount,

            wordCount,

            sections,

            detectedSkills,

            detectedKeywords,

            suggestions,

            summary,

            projects,

            experience,

            actionVerbs
        });

    } catch (error) {
        console.error(
            "Resume analysis error:",
            error
        );

        return res.status(500).json({
            message:
                "Failed to analyze resume"
        });
    }
};


// ==========================================
// GET PREVIOUS ANALYSIS HISTORY
// ==========================================

export const getAnalysisHistory =
    async (req, res) => {
        try {

            const analyses =
                await Analysis.find({
                    userId: req.user.userId
                })
                    .populate(
                        "resumeId",
                        "fileName createdAt"
                    )
                    .sort({
                        createdAt: -1
                    });

            return res.status(200).json({
                message:
                    "Analysis history fetched successfully",

                analyses
            });

        } catch (error) {

            console.error(
                "Analysis history error:",
                error
            );

            return res.status(500).json({
                message:
                    "Failed to fetch analysis history"
            });
        }
    };


// ==========================================
// GET SINGLE ANALYSIS
// ==========================================

export const getSingleAnalysis =
    async (req, res) => {
        try {

            const { id } =
                req.params;

            const analysis =
                await Analysis.findOne({
                    _id: id,
                    userId: req.user.userId
                })
                    .populate(
                        "resumeId",
                        "fileName createdAt"
                    );

            if (!analysis) {
                return res.status(404).json({
                    message:
                        "Analysis not found."
                });
            }

            return res.status(200).json({
                message:
                    "Analysis fetched successfully",

                analysis
            });

        } catch (error) {

            console.error(
                "Single analysis error:",
                error
            );

            return res.status(500).json({
                message:
                    "Failed to fetch analysis"
            });
        }
    };


// ==========================================
// DELETE ANALYSIS
// ==========================================

export const deleteAnalysis =
    async (req, res) => {
        try {

            const { id } =
                req.params;

            const analysis =
                await Analysis.findOne({
                    _id: id,
                    userId: req.user.userId
                });

            if (!analysis) {
                return res.status(404).json({
                    message:
                        "Analysis not found."
                });
            }

            await Analysis.deleteOne({
                _id: id,
                userId: req.user.userId
            });

            return res.status(200).json({
                message:
                    "Analysis deleted successfully"
            });

        } catch (error) {

            console.error(
                "Delete analysis error:",
                error
            );

            return res.status(500).json({
                message:
                    "Failed to delete analysis"
            });
        }
    };


// ==========================================
// DOWNLOAD ANALYSIS PDF
// ==========================================

export const downloadAnalysisPDF =
    async (req, res) => {

        try {

            const { id } = req.params;


            // ==========================================
            // GET ANALYSIS
            // ==========================================

            const analysis =
                await Analysis.findOne({
                    _id: id,
                    userId: req.user.userId
                })
                    .populate(
                        "resumeId",
                        "fileName createdAt"
                    );


            if (!analysis) {
                return res.status(404).json({
                    message:
                        "Analysis not found."
                });
            }


            // ==========================================
            // CREATE PDF
            // ==========================================

            const doc =
                new PDFDocument({
                    margin: 50,
                    size: "A4"
                });


            const fileName =
                `ResumeIQ_Report_${Date.now()}.pdf`;


            res.setHeader(
                "Content-Type",
                "application/pdf"
            );

            res.setHeader(
                "Content-Disposition",
                `attachment; filename="${fileName}"`
            );


            doc.pipe(res);


            // ==========================================
            // TITLE
            // ==========================================

            doc
                .fontSize(24)
                .text(
                    "ResumeIQ",
                    {
                        align: "center"
                    }
                );


            doc
                .moveDown(0.3)
                .fontSize(14)
                .text(
                    "AI Career Assistant",
                    {
                        align: "center"
                    }
                );


            doc.moveDown(1);


            doc
                .fontSize(20)
                .text(
                    "Resume Analysis Report",
                    {
                        align: "center"
                    }
                );


            doc.moveDown(1);


            // ==========================================
            // RESUME INFORMATION
            // ==========================================

            doc
                .fontSize(12)
                .text(
                    `Resume: ${analysis.resumeId?.fileName || "Resume"}`
                );

            doc
                .text(
                    `Analysis Date: ${new Date(
                        analysis.createdAt
                    ).toLocaleDateString()}`
                );


            doc.moveDown(1);


            // ==========================================
            // SCORE SUMMARY
            // ==========================================

            doc
                .fontSize(16)
                .text(
                    "Score Summary"
                );

            doc.moveDown(0.4);


            doc
                .fontSize(12)
                .text(
                    `ATS Score: ${analysis.atsScore}/100`
                );

            doc
                .text(
                    `Resume Health: ${analysis.resumeHealth}`
                );

            doc
                .text(
                    `Interview Readiness: ${analysis.interviewReadiness}/100`
                );

            doc
                .text(
                    `Word Count: ${analysis.wordCount}`
                );


            doc.moveDown(1);


            // ==========================================
            // DETECTED SKILLS
            // ==========================================

            doc
                .fontSize(16)
                .text(
                    "Detected Skills"
                );

            doc.moveDown(0.4);


            if (
                analysis.detectedSkills &&
                analysis.detectedSkills.length > 0
            ) {

                analysis.detectedSkills.forEach(
                    skill => {
                        doc
                            .fontSize(11)
                            .text(
                                `• ${skill}`
                            );
                    }
                );

            } else {

                doc
                    .fontSize(11)
                    .text(
                        "No technical skills detected."
                    );
            }


            doc.moveDown(1);


            // ==========================================
            // DETECTED KEYWORDS
            // ==========================================

            doc
                .fontSize(16)
                .text(
                    "Detected Keywords"
                );

            doc.moveDown(0.4);


            if (
                analysis.detectedKeywords &&
                analysis.detectedKeywords.length > 0
            ) {

                analysis.detectedKeywords.forEach(
                    keyword => {
                        doc
                            .fontSize(11)
                            .text(
                                `• ${keyword}`
                            );
                    }
                );

            } else {

                doc
                    .fontSize(11)
                    .text(
                        "No important keywords detected."
                    );
            }


            doc.moveDown(1);


            // ==========================================
            // SUMMARY
            // ==========================================

            doc
                .fontSize(16)
                .text(
                    "Professional Summary"
                );

            doc.moveDown(0.4);


            doc
                .fontSize(11)
                .text(
                    analysis.summary ||
                    "No professional summary detected."
                );


            doc.moveDown(1);


            // ==========================================
            // PROJECTS
            // ==========================================

            doc
                .fontSize(16)
                .text(
                    "Projects"
                );

            doc.moveDown(0.4);


            if (
                analysis.projects &&
                analysis.projects.length > 0
            ) {

                analysis.projects.forEach(
                    project => {
                        doc
                            .fontSize(11)
                            .text(
                                `• ${project}`
                            );
                    }
                );

            } else {

                doc
                    .fontSize(11)
                    .text(
                        "No project information detected."
                    );
            }


            doc.moveDown(1);


            // ==========================================
            // EXPERIENCE
            // ==========================================

            doc
                .fontSize(16)
                .text(
                    "Experience"
                );

            doc.moveDown(0.4);


            if (
                analysis.experience &&
                analysis.experience.length > 0
            ) {

                analysis.experience.forEach(
                    item => {
                        doc
                            .fontSize(11)
                            .text(
                                `• ${item}`
                            );
                    }
                );

            } else {

                doc
                    .fontSize(11)
                    .text(
                        "No experience information detected."
                    );
            }


            doc.moveDown(1);


            // ==========================================
            // ACTION VERBS
            // ==========================================

            doc
                .fontSize(16)
                .text(
                    "Action Verbs"
                );

            doc.moveDown(0.4);


            if (
                analysis.actionVerbs &&
                analysis.actionVerbs.length > 0
            ) {

                doc
                    .fontSize(11)
                    .text(
                        analysis.actionVerbs.join(
                            ", "
                        )
                    );

            } else {

                doc
                    .fontSize(11)
                    .text(
                        "No strong action verbs detected."
                    );
            }


            doc.moveDown(1);


            // ==========================================
            // IMPROVEMENT SUGGESTIONS
            // ==========================================

            doc
                .fontSize(16)
                .text(
                    "Improvement Suggestions"
                );

            doc.moveDown(0.4);


            if (
                analysis.suggestions &&
                analysis.suggestions.length > 0
            ) {

                analysis.suggestions.forEach(
                    suggestion => {
                        doc
                            .fontSize(11)
                            .text(
                                `• ${suggestion}`
                            );
                    }
                );

            } else {

                doc
                    .fontSize(11)
                    .text(
                        "No improvement suggestions."
                    );
            }


            doc.moveDown(1);


            // ==========================================
            // FOOTER
            // ==========================================

            doc
                .fontSize(9)
                .text(
                    "Generated by ResumeIQ - AI Career Assistant",
                    {
                        align: "center"
                    }
                );


            // ==========================================
            // FINALIZE PDF
            // ==========================================

            doc.end();


        } catch (error) {

            console.error(
                "PDF generation error:",
                error
            );

            if (!res.headersSent) {
                return res.status(500).json({
                    message:
                        "Failed to generate PDF report"
                });
            }
        }
    };