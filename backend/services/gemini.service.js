import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

console.log("Gemini service - API key loaded:", !!apiKey);
console.log("Gemini service - API key length:", apiKey ? apiKey.length : 0);

const ai = new GoogleGenAI({
    apiKey: apiKey
});

export const generateGeminiResponse = async (prompt) => {
    try {
        const interaction = await ai.interactions.create({
            model: "gemini-3.6-flash",
            input: prompt
        });

        return interaction.output_text;

    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error("Failed to get response from Gemini");
    }
};