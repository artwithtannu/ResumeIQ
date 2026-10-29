import "dotenv/config";
import mongoose from "mongoose";

try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connection successful!");
    console.log("Connected to:", connection.connection.host);

    await mongoose.disconnect();
} catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error);
}