import { Resume } from "../models/resume.model.js";
import { generateGeminiResponse } from "../services/gemini.service.js";

export const matchJobDescription = async (req, res) => {
    try {
        const { jobDescription } = req.body;

        if (!jobDescription || jobDescription.trim().length === 0) {
            return res.status(400).json({
                message: "Job description is required."
            });
        }

        // Get user's latest resume
        const resume = await Resume.findOne({
            userId: req.user.userId
        }).sort({ createdAt: -1 });

        if (!resume) {
            return res.status(404).json({
                message: "No resume found. Please upload a resume first."
            });
        }

        if (!resume.resumeText || resume.resumeText.trim().length === 0) {
            return res.status(400).json({
                message: "Resume text is not available."
            });
        }

        const prompt = `
You are a professional resume and job matching assistant.

Compare the candidate's resume with the given job description.

RESUME:
${resume.resumeText}

JOB DESCRIPTION:
${jobDescription}

Analyze how well the resume matches the job description.

Return ONLY valid JSON in exactly this structure:

{
  "matchPercentage": 0,
  "matchedSkills": [],
  "missingSkills": [],
  "suggestions": []
}

Rules:
- matchPercentage must be a number between 0 and 100.
- matchedSkills should contain skills from the job description that are supported by the resume.
- missingSkills should contain important skills from the job description that are not clearly present in the resume.
- suggestions should contain practical suggestions for improving the resume for this particular job.
- Do not invent skills or experience that are not present in the resume.
- Do not include any text outside the JSON.
`;

        const aiResponse = await generateGeminiResponse(prompt);

        let result;

        try {
            result = JSON.parse(aiResponse);
        } catch (error) {
            console.error("Gemini JSON parsing error:", aiResponse);

            return res.status(500).json({
                message: "Gemini returned an invalid response."
            });
        }

        return res.status(200).json({
            message: "Job description matched successfully",
            match: result
        });

    } catch (error) {
        console.error("Job matching error:", error);

        return res.status(500).json({
            message: "Failed to match resume with job description."
        });
    }
};