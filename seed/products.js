const { Schema } = require("mongoose");
const db = require("../db/connection");
const product = require("../models/product");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    
  ];

  await Product.insertMany(products);
  console.log("Products Created");
};
const run = async () => {
  await main();
  db.close();
};

run();
