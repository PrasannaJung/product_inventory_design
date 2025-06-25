import mongoose from "mongoose";

const InventoryProductSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
  },
  { _id: false }
);

export const WarehouseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: { street: String, city: String, country: String },
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "full", "under_maintenance"],
      default: "active",
    },
    products: [InventoryProductSchema],
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

export const Warehouse = mongoose.model("WarehouseSchema", InventorySchema);
