import express from "express";
import * as AuthController from "./auth.controller.js";

// ============================================================
//                        AUTH ROUTES
// ============================================================

const router = express.Router();

// ----------------- Public Routes -----------------
router.post("/register", AuthController.register);


// ----------------- Private Routes -----------------

export default router;
