const mongoose = require("mongoose");

let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/hardwareAppDatabase";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log("Connection error", e.message));

module.exports = mongoose.connection
