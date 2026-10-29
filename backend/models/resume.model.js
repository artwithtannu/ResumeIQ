import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        fileName: {
            type: String,
            required: true
        },

        resumeText: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

export const Resume = mongoose.model("Resume", resumeSchema);