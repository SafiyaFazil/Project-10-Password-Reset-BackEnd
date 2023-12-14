import express from "express";

import { authMiddleware } from "../Middleware/auth.Middleware.js";
import { getUserById, loginUser, registerUser, resetPassword, resetPasswordpage } from "../Controllers/User.Controller.js";

const router = express.Router();

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/getuser", authMiddleware, getUserById);
router.post("/resetpassword", resetPassword);
router.post("/resetpasswordpage", resetPasswordpage);

export default router;
