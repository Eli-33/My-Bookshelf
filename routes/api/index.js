const router = require("express").Router();
const bookRoutes = require("./books");
const apiRoutes = require("./user-routes");
const noteRoutes = require("./notes");

// Book routes
router.use("/books", bookRoutes);
router.use(noteRoutes);
router.use(apiRoutes);

module.exports = router;