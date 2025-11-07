import bcrypt from "bcrypt";
import User from "../models/userModel.js";

export const registerUser = async (userData) => {
  try {
    const { name, email, password } = userData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("El usuario ya existe");
    }

    const newUser = await User.create({ name, email, password });

    return {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Contraseña incorrecta");
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
