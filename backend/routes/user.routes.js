import express from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile", verifyJWT, (req, res) => {
    res.status(200).json({
        message: "You are authenticated",
        user: req.user
    });
});

router.get("/dashboard", verifyJWT, (req, res) => {
    res.status(200).json({
        message: "Welcome to ResumeIQ Dashboard",
        user: req.user
    });
});

export default router;