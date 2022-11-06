const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true,
    unique: [true, "Book must have a unique title"],
    required: [true, "Book must have a title"],
  },
  author: {
    type: String,
    lowercase: true,
    required: [true, "Book must have an author"],
  },
  added: {
    type: Date,
    default: Date.now(),
  },
  rating: {
    type: Number,
    required: [true, "Book must have a rating"],
    min: 1,
    max: 5,
  },
  comments: {
    type: String,
    required: [true, "Book must have comments"],
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
