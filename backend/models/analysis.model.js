import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        resumeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Resume",
            required: true
        },

        atsScore: {
            type: Number,
            default: 0
        },

        resumeHealth: {
            type: String,
            default: "Needs Improvement"
        },

        interviewReadiness: {
            type: Number,
            default: 0
        },

        wordCount: {
            type: Number,
            default: 0
        },

        sections: {
            contact: Boolean,
            education: Boolean,
            skills: Boolean,
            experience: Boolean,
            projects: Boolean,
            certifications: Boolean
        },

        detectedSkills: {
            type: [String],
            default: []
        },

        detectedKeywords: {
            type: [String],
            default: []
        },

        suggestions: {
            type: [String],
            default: []
        },

        summary: {
            type: String,
            default: ""
        },

        projects: {
            type: [String],
            default: []
        },

        experience: {
            type: [String],
            default: []
        },

        actionVerbs: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
);

export const Analysis =
    mongoose.model(
        "Analysis",
        analysisSchema
    );