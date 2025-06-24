import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    _id: false,
  }
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
