import mongoose from "mongoose";

export const SalesSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    clientName: {
      type: String,
    },
    unitPrice: { type: String },

    priceAtSales: {
      type: Number,
      required: true,
    },
    salesDate: {
      type: Date,
      default: Date.now,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    billing: {
      finalAmount: Number,
      invoice: String,
      remarks: String,
    },
  },
  { timestamps: true }
);

export const Sale = mongoose.model("Purchase", PurchaseSchema);
