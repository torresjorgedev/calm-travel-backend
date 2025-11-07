import Category from "../models/categoryModel.js";


export const createCategory = async (data) => {
  try {
    const category = new Category(data);
    return await category.save();
  } catch (error) {
    throw new Error(`Error al crear la categoría: ${error.message}`);
  }
};


export const getAllCategories = async () => {
  try {
    return await Category.find();
  } catch (error) {
    throw new Error(`Error al obtener las categorías: ${error.message}`);
  }
};


export const getCategoryById = async (id) => {
  try {
    return await Category.findById(id);
  } catch (error) {
    throw new Error(`Error al obtener la categoría mediante el ID ${id}: ${error.message}`);
  }
};


export const updateCategory = async (id, data) => {
  try {
    return await Category.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error(`Error al actualizar la categoría mediante el ID ${id}: ${error.message}`);
  }
};


export const deleteCategory = async (id) => {
  try {
    return await Category.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error al eliminar la categoría mediante el ID ${id}: ${error.message}`);
  }
};
