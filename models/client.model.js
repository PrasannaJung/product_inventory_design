import mongoose from "mongoose";

export const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "Client",
    },
    contact: {
      email: String,
      phone: String,
    },
    address: {
      city: String,
      country: String,
    },
  },
  {
    timestamps: true,
  }
);
