import mongoose from "mongoose";
import { ReviewSchema } from "./review.model.js";
import { CategorySchema } from "./category.model.js";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  basePrice: {
    amount: { type: Number, required: true },
    currency: { type: String, default: "NPR" },
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  clientName: {
    type: String,
  },
  categories: [{ type: CategorySchema }],
  recentReviews: [
    {
      type: ReviewSchema,
      default: [],
    },
  ],
  reviewsCount: {
    type: Number,
  },
  attributes: [
    {
      key: { type: String, required: true },
      value: { type: mongoose.Schema.Types.Mixed, required: true },
    },
  ],
  data: {},
  images: {
    type: [
      {
        url: String,
        alt: String,
        primary: Boolean,
      },
    ],
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: Number,
    default: 0,
  },
  totalStock: {
    type: Number,
    default: 0,
    min: 0,
  },

  recentPurchasers: [
    {
      clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      clientName: { type: String },
      totalUnits: Number,
      lastPurchaseDate: { type: Date, default: Date.now, required: true },
    },
  ],

  status: {
    type: String,
    enum: ["published", "draft", "archived", "out_of_stock"],
    default: "draft",
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
