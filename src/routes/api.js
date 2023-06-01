const express = require("express");
const booksController = require("../controllers/booksController");

const router = express.Router();

// status api
router.get("/", (req, res) => {
  res.send("api server is running");
});

// books api
router.get("/books", booksController.getBook);
router.post("/books", booksController.createBook);
router.get("/books/:id", booksController.singleBook);
router.put("/books/:id", booksController.updateBook);
router.delete("/books/:id", booksController.deleteBook);

module.exports = router;
