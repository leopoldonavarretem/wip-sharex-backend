const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    user_Id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: false,
    },

    media_Id: {
      type: Schema.Types.ObjectId,
      ref: "Media",
      unique: false,
    },

    review_text: {
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
