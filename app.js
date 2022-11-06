require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require("cors");

//// Setup Cors
app.use(
  cors({
    origin: "*",
  })
);

//// Let express read JSON files
app.use(express.json());

//// routers
const booksRouter = require("./routes/booksRouter");

//// routes
app.use("/books/v1", booksRouter);

module.exports = app;
