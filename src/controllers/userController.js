import { registerUser, loginUser } from "../services/userService.js";

export const register = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await registerUser(userData);
    res.status(201).json({ message: "Usuario registrado correctamente", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loggedUser = await loginUser(email, password);
    res.status(200).json({ message: "Login exitoso", user: loggedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
