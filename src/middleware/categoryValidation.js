import { body } from "express-validator";

export const validateCategory = [
  body("name")
    .trim()
    .notEmpty().withMessage("El nombre de la categoría es obligatorio")
    .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),
  body("description")
    .optional()
    .isLength({ max: 500 }).withMessage("La descripción no puede exceder los 500 caracteres")
];
