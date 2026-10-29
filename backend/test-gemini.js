import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

console.log("API key loaded:", !!process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function testGemini() {
    try {
        const interaction = await ai.interactions.create({
            model: "gemini-3.6-flash",
            input: "Say hello in one short sentence."
        });

        console.log("Gemini Response:");
        console.log(interaction.output_text);

    } catch (error) {
        console.error("Gemini Error:");
        console.error(error);
    }
}

testGemini();