import express from "express";
import { matchJobDescription } from "../controllers/jobMatch.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
    "/match",
    verifyJWT,
    matchJobDescription
);

export default router;