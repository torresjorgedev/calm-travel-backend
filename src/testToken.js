import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generarToken = (userId) => {
  return jwt.sign(
    { id: userId, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

// Testtt
const token = generarToken("1234567890abcdef");
console.log("TOKEN GENERADO:", token);
