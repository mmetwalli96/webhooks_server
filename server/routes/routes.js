// Import dependencies
const router = require("express").Router();

// Import controller
const controller = require("../controllers");

// get requests

router.get("/test", controller.get.test);

// Export the router
module.exports = router;