import express from "express";

import {
    analyzeResume,
    getAnalysisHistory,
    getSingleAnalysis,
    deleteAnalysis,
    downloadAnalysisPDF
} from "../controllers/analysis.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();


// ==========================================
// ANALYZE CURRENT RESUME
// ==========================================

router.get(
    "/resume",
    verifyJWT,
    analyzeResume
);


// ==========================================
// PREVIOUS ANALYSIS HISTORY
// ==========================================

router.get(
    "/history",
    verifyJWT,
    getAnalysisHistory
);


// ==========================================
// DOWNLOAD ANALYSIS PDF
// ==========================================

router.get(
    "/history/:id/pdf",
    verifyJWT,
    downloadAnalysisPDF
);


// ==========================================
// SINGLE PREVIOUS ANALYSIS
// ==========================================

router.get(
    "/history/:id",
    verifyJWT,
    getSingleAnalysis
);


// ==========================================
// DELETE PREVIOUS ANALYSIS
// ==========================================

router.delete(
    "/history/:id",
    verifyJWT,
    deleteAnalysis
);


export default router;