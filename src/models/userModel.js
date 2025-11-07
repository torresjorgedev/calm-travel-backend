import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Es requerido un nombre de usuario"], trim: true },
  email: { type: String, required: [true, "Es requerida una dirección de email"], unique: true, lowercase: true, trim: true },
  password: { type: String, required: [true, "Es requerido un password"] },
  role: { type: String, enum: ["user", "admin"], default: "user" },
}, { timestamps: true });

// Hasheo de pass 
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
