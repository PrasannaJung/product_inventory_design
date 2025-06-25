import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Supplier", "Store"],
    default: "Store",
  },
  contact: {
    email: String,
    phone: String,
  },
  address: {
    street: String,
    city: String,
    country: String,
  },
  availableProducts: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      title: String,
      primaryImage: { url: String, alt: String },
      totalRatings: Number,
      avgRating: Number,
      price: Number,
    },
  ],
});

const Seller = mongoose.model("Seller", SellerSchema);
