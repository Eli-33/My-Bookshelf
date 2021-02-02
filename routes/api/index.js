const router = require("express").Router();
const bookRoutes = require("./books");
const apiRoutes = require("./user-routes");

// Book routes
router.use("/books", bookRoutes);
router.use(apiRoutes);

module.exports = router;