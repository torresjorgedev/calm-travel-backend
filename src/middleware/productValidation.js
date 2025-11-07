import { body } from "express-validator";

export const validateProduct = [
  body("name")
    .notEmpty().withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),
  body("price")
    .notEmpty().withMessage("El precio es obligatorio")
    .isFloat({ min: 0 }).withMessage("El precio debe ser un número positivo"),
  body("stock")
    .optional()
    .isInt({ min: 0 }).withMessage("El stock debe ser un número entero mayor o igual a 0"),
  body("category")
    .notEmpty().withMessage("La categoría es obligatoria")
    .isMongoId().withMessage("La categoría debe ser un ID válido de MongoDB"),
  body("images")
    .optional()
    .isArray().withMessage("Las imagenes deben ser un array")
];
