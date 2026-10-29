import express from "express";

import { uploadResume } from "../controllers/resume.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { uploadResume as upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.post(
    "/upload",
    verifyJWT,
    upload.single("resume"),
    uploadResume
);

export default router;