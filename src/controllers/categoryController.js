import * as categoryService from "../services/categoryService.js";

export const createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear categoría", error: error.message });
  }
};

export const getCategories = async (_req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener categorías", error: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener categoría", error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.body);
    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar categoría", error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await categoryService.deleteCategory(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    return res.status(200).json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar categoría", error: error.message });
  }
};
