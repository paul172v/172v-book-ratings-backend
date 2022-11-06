const Book = require("../models/bookSchema");

exports.getAll = async (req, res) => {
  try {
    const allBooks = await Book.find();

    res.status(202).json({
      status: "success",
      total: allBooks.length,
      data: allBooks,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getOneByTitle = async (req, res) => {
  try {
    const title = req.params.title.replaceAll("-", " ").toLowerCase();
    const book = await Book.find({ title: title });

    res.status(202).json({
      status: "success",
      data: book,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getOneByAuthor = async (req, res) => {
  try {
    const author = req.params.author.replaceAll("-", " ").toLowerCase();
    const book = await Book.find({ author: author });

    res.status(202).json({
      status: "success",
      data: book,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getHighestRated = async (req, res) => {
  try {
    const highestRatedBooks = await Book.find({ rating: { $gte: 4 } });

    res.status(202).json({
      status: "success",
      total: highestRatedBooks.length,
      data: highestRatedBooks,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.addBook = async (req, res) => {
  try {
    const allBooks = await Book.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Book added",
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const title = req.params.title.replaceAll("-", " ").toLowerCase();

    

    await Book.findOneAndUpdate({ title: title }, req.body);

    res.status(202).json({
      status: "success",
      message: "Book updated",
    });
  } catch (err) {
    res.status(304).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const title = req.params.title.replaceAll("-", " ").toLowerCase();
    await Book.findOneAndDelete({ title: title });

    res.status(404).json({
      status: "success",
      message: "Book deleted",
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};
