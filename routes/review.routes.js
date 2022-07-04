//Imports
const router = require("express").Router();

//Import models
const Review = require("../models/review.model.js");
const User = require("../models/user.model");

//Create a review
router.post("/", (req, res) => {
  Review.create(req.body)
    .then((review) => {
      res.status(201);
      res.json(review);
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
});

//Read all reviews
router.get("/", (req, res) => {
  Review.find()
    .then((reviews) => {
      res.status(200);
      res.json(reviews);
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
});

//Read a review
router.get("/:id", (req, res) => {
  Review.findById(req.params.id).then((review) => {
    res.status(200);
    res.json(review);
  });
});

//Update a review
router.patch("/:id", (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((review) => {
      res.status(200);
      res.json(review);
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  Review.findByIdAndDelete(req.params.id)
    .then((review) => {
      res.status(200);
      res.json(review);
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
});


module.exports = router;
