import mongoose from "mongoose";

export const ReviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  //   author: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //     required: true,
  //   },
  authorName: {
    type: String,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
});

const Review = mongoose.model("Review", ReviewSchema);

export default Review;
