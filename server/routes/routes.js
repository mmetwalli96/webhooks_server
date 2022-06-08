// Import dependencies
const router = require("express").Router();

// Import controller
const controller = require("../controllers");

// get requests
router.get("/test", controller.get.test);

// post requests
router.post("/event_handler", controller.post.eventHandler);

// Export the router
module.exports = router;