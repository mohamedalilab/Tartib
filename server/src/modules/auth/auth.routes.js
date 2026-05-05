import express from "express";
import * as AuthController from "./auth.controller.js";
import { verifyAccessMW } from "../../middlewares/verifyAccessMW.js";

// ============================================================
//                        AUTH ROUTES
// ============================================================

const router = express.Router();

// ----------------- Public Routes -----------------
router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.post("/logout", AuthController.logout);

router.post("/verify-email", AuthController.verifyEmail);

// ----------------- Private Routes -----------------

router.use(verifyAccessMW);

router.patch("/change-password", AuthController.changePassword);

export default router;
