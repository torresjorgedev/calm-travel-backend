import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: "Sin descripción"
  }
}, {
  timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
