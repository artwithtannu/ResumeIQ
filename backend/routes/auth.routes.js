import express from "express";
import { signup ,login,profile} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login",login);

router.get("/profile",verifyJWT,profile);

export default router;