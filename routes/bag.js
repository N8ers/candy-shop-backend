const express = require("express");
const router = express.Router();
const Bag = require("../models/Bag");

// get bag content
router.get("/", (req, res) => {
  Bag.findAll()
    .then(bag => {
      // console.log("success!");
      // console.log(bag);
      res.sendStatus(200);
    })
    .catch(() => {
      console.log("error in bag router");
      res.sendStatus(500);
    });
});

// add candy to bag
router.post("/add", (req, res) => {
  let candy_id = req.body.candy_id;

  Bag.create({
    candy_id
  })
    .then(bag => {
      res.sendStatus(200);
      // console.log("success! " + bag);
    })
    .catch(err => {
      res.sendStatus(500);
      console.log("add failure" + err);
    });
});

module.exports = router;
