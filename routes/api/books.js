const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("api/books/dashboard")
  .get(booksController.findAll)
  .post(booksController.save);

// Matches with "/api/books/:id"
router.route("/api/books/other/:id")
  .get(booksController.findOne)
  .delete(booksController.remove);

  // for edit
  // router.route("/api/other/:id/status")
  // .put(booksController.setStatus)

module.exports = router;