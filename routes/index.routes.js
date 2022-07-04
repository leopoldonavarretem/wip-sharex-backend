//Import the Router from express
const router = require("express").Router();

//Route imports
const reviewRoutes = require("./review.routes");

router.get("/", (req, res)=>{
    res.send("Welcome to the Sharex API, Happy sharing!")
})

//Manages the routes to other pages
router.use("/reviews", reviewRoutes)

module.exports = router;