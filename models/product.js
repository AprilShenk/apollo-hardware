const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Product = new Schema(
//   {
//     name: { type: String, required: true },
//     imgURL1: { type: String, required: true },
//     imgURL2: { type: String, required: true },
//     imgURL3: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     rating: { type: Number, required: true },
//     quantity: { type: Number, required: true },
//   },
//   { timestamps: true }
// );

// With reviews below

const Product = new Schema(
  {
    name: { type: String, required: true },
    imgURL1: { type: String, required: true },
    imgURL2: { type: String, required: true },
    imgURL3: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    reviews: [
      {
        author: { type: String, required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);

Product.virtual('rating').get(function () {
  return Math.ceil(this.reviews.reduce((total, review) => total + review.rating, 0) / this.reviews.length)
})

module.exports = mongoose.model("products", Product);