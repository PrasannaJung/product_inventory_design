import mongoose from "mongoose";

export const SalesSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    clientName: {
      type: String,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        productName: {
          type: String,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        unitCost: {
          type: Number,
          required: true,
        },
        discountRate: { type: Number },
        subtotal: {
          type: Number,
          required: true,
        },
      },
    ],

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
