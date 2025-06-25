import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["supplier", "admin", "customer"],
      default: "customer",
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

const User = mongoose.model("User", UserSchema);

export default User;
