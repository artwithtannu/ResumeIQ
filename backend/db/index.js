import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Reuse existing connection
        if (mongoose.connection.readyState === 1) {
            return;
        }

        const connectionInstance = await mongoose.connect(
            process.env.MONGODB_URI,
            {
                family: 4
            }
        );

        console.log(
            `MongoDB connected: ${connectionInstance.connection.host}`
        );

    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw error;
    }
};

export default connectDB;
