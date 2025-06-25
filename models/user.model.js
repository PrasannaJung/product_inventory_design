import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["supplier", "admin", "client"],
      default: "Client",
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
  },
  {
    timestamps: true,
  }
);
