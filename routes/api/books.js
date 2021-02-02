const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.save);


// Matches with "/api/books/:id"
router.route("/:id")
  .get(booksController.findOne)
  .delete(booksController.remove)
  .put(booksController.updatestatus);  /// ide in the req.params and the stauts in the req.body.status




  // for edit
  // router.route("/api/other/:id/status")
  // .put(booksController.setStatus)

module.exports = router;