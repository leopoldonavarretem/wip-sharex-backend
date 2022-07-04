const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: false,
    },

    mediaId: {
      type: Schema.Types.ObjectId,
      ref: "Media",
      unique: false,
    },

    reviewText: {
      type: String,
    },

    rating: {
      type: Number,
    },

    like: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Review", reviewSchema);
