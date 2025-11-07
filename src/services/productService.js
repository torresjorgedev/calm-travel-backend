import Product from "../models/productModel.js";


export const createProduct = async (data) => {
  try {
    const product = await Product.create(data);
    return product; 
  } catch (error) {
    throw new Error(`Error al crear el producto: ${error.message}`);
  }
};

export const getAllProducts = async () => {
  try {
    const products = await Product.find().populate("category");
    return products;
  } catch (error) {
    throw new Error(`Error al obtener los productos: ${error.message}`);
  }
};

export const getProductById = async (id) => {
  try {
    const product = await Product.findById(id).populate("category");
    return product;
  } catch (error) {
    throw new Error(`Error al obtener el producto mediante el ID ${id}: ${error.message}`);
  }
};

export const updateProduct = async (id, data) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true }).populate("category");
    return updatedProduct;
  } catch (error) {
    throw new Error(`Error al actualizar el producto mediante el ID ${id}: ${error.message}`);
  }
};


export const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  } catch (error) {
    throw new Error(`Error al eliminar el producto mediante el ID ${id}: ${error.message}`);
  }
};
