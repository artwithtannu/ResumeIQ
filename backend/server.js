import dns from "dns";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import resumeRoutes from "./routes/resume.routes.js";
import analysisRoutes from "./routes/analysis.routes.js";
import jobMatchRoutes from "./routes/jobMatch.routes.js";

dotenv.config();

// Use Google's DNS for MongoDB SRV lookup
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

const allowedOrigin = "https://resume-frontend-six-ruby.vercel.app";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "ResumeIQ Backend is running 🚀"
  });
});

// Ensure MongoDB is connected before handling API requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error);

    return res.status(500).json({
      message: error.message
    });
  }
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/job-match", jobMatchRoutes);

// Run local server only when developing locally
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(
      `ResumeIQ Backend running on http://localhost:${PORT}`
    );
  });
}

export default app;
