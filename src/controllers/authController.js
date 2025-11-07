import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const generarToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role }, 
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const passwordCorrecta = await user.comparePassword(password);
    if (!passwordCorrecta) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = generarToken(user);

    
    return res.status(200).json({
      message: "Login exitoso",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};
