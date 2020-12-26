const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const transactions = require("./routes/transaction");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use("/api/v1/transactions", transactions);

app.get("/", (req, res) => {
  res.send("Henlo");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
