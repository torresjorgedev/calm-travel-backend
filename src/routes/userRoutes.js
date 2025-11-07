import express from "express";
import { register, login } from "../controllers/userController.js";

import { validateRegister, validateLogin } from "../middleware/userValidation.js";

import { handleValidationErrors } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post(
  "/register",
  validateRegister,
  handleValidationErrors,
  register 
);


router.post(
  "/login",
  validateLogin,
  handleValidationErrors,
  login
);

export default router;
