const express = require("express");
const router = express.Router();

//// Controller
const booksController = require("../controllers/booksController");

router.route("/").get(booksController.getAll).post(booksController.addBook);

router
  .route("/get-by-title/:title")
  .get(booksController.getOneByTitle)
  .patch(booksController.updateBook)
  .delete(booksController.deleteBook);

router.route("/get-by-author/:author").get(booksController.getOneByAuthor);

router.route("/highest-rated").get(booksController.getHighestRated);

module.exports = router;
