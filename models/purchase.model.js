import mongoose from "mongoose";

export const SourcingSchema = new mongoose.Schema(
  {
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        productTitle: {
          type: String,
          required: true,
          trim: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        unitCost: {
          type: Number,
          required: true,
          min: 0,
        },
        subtotal: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    supplierName: {
      type: String,
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
    currency: {
      type: String,
      default: "NPR",
      required: true,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "ordered",
        "received",
        "partially_received",
        "cancelled",
      ],
      default: "pending",
    },
    invoiceNumber: {
      type: String,
      trim: true,
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "partially_paid", "paid", "refunded"],
      default: "unpaid",
    },
    notes: {
      type: String,
      trim: true,
    },
    receivedIntoWarehouse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventory",
      required: false,
    },
  },
  { timestamps: true }
);

export const Purchase = mongoose.model("PurchaseSchema", PurchaseSchema);
