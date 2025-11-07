import express from "express";
import { 
  createCategory,
  getCategories,
  getCategoryById, 
  updateCategory,
  deleteCategory
} from "../controllers/categoryController.js";


import verifyToken from "../middleware/verifyToken.js";

import isAdmin from "../middleware/isAdmin.js";

import { validateCategory } from "../middleware/categoryValidation.js";

import  handleValidationErrors  from "../middleware/handleValidationErrors.js";

const router = express.Router();


router.get("/", getCategories);
router.get("/:id", getCategoryById);


router.post(
  "/",
  verifyToken,
  isAdmin,
  validateCategory,
  handleValidationErrors,
  createCategory
);

router.put(
  "/:id",
  verifyToken,
  isAdmin,
  validateCategory,
  handleValidationErrors,
  updateCategory
);

router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  deleteCategory
);

export default router;
