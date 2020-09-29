const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reviews = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true },
    productId: { type: Schema.Types.ObjectId, ref: "products" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("reviews", Reviews);
