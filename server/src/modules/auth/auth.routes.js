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

router.post("/refresh", AuthController.refreshToken);

router.post("/verify-email", AuthController.verifyEmail);

router.post("/resend-verification", AuthController.resendVerify);

router.post("/forgot-password", AuthController.forgotPassword);

router.post("/reset-password", AuthController.resetPassword);

// ----------------- Private Routes -----------------

router.use(verifyAccessMW);

router.post("/logout", AuthController.logout);

router.patch("/change-password", AuthController.changePassword);

export default router;
