import express from "express";
import { 
  createProduct, 
  getProducts, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} from "../controllers/productController.js";

import { validateProduct } from "../middleware/productValidation.js"; 
import handleValidationErrors from "../middleware/handleValidationErrors.js"; 


import verifyToken from "../middleware/verifyToken.js";


import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

router.post(
  "/", 
  verifyToken,
  isAdmin, 
  validateProduct, 
  handleValidationErrors, 
  createProduct 
);

router.get("/", getProducts); 

router.get("/:id", getProductById); 

router.put(
  "/:id", 
  verifyToken, 
  isAdmin, 
  validateProduct, 
  handleValidationErrors, 
  updateProduct
);


router.delete(
  "/:id", 
  verifyToken, 
  isAdmin,
  deleteProduct
);

export default router;
