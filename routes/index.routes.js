//Import the Router from express
const router = require("express").Router();

router.get("/", (req, res)=>{
    res.send("Welcome to the Sharex API, Happy sharing!")
})

module.exports = router;