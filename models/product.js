const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true }, 
    quantity: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('products', Product)

// With reviews below

// const ProductWithReviews = new Schema(
//   {
//     name: { type: String, required: true },
//     imgURL: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: String, required: true }, 
//     quantity: { type: Number, required: true },
//     reviews: [{ 
//       author: { type: String, required: true },
//       rating: { type: String, required: true }, 
//       description: { type: String, required: true }
//      }]
//   },
//   { timestamps: true }
// )