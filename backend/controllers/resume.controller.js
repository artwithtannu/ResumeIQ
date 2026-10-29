import { CanvasFactory } from "pdf-parse/worker";
import { PDFParse } from "pdf-parse";
import { Resume } from "../models/resume.model.js";

export const uploadResume = async (req, res) => {
    try {
        console.log("REQ.FILE:", req.file);
        console.log("REQ.BODY:", req.body);

        if (!req.file) {
            return res.status(400).json({
                message: "Resume file is required"
            });
        }

        // 1. Get uploaded PDF from memory
        const pdfBuffer = req.file.buffer;

        // 2. Create PDF parser
        const parser = new PDFParse({
            data: pdfBuffer,
            CanvasFactory
        });

        // 3. Extract text
        const result = await parser.getText();

        const extractedText = result.text;

        console.log("EXTRACTED TEXT:");
        console.log(extractedText);

        // 4. Save resume details in MongoDB
        const resume = await Resume.create({
            userId: req.user.userId,
            fileName: req.file.originalname,
            resumeText: extractedText
        });

        // 5. Clean parser resources
        await parser.destroy();

        return res.status(201).json({
            message: "Resume uploaded and text extracted successfully",
            resume: {
                id: resume._id,
                fileName: resume.fileName,
                resumeText: resume.resumeText
            }
        });

    } catch (error) {
        console.error("Resume upload error:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};