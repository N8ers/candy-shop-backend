const express = require("express");
const router = express.Router();
const Candy = require("../models/Candy");

// get all candy
router.get("/", (req, res) => {
  Candy.findAll()
    .then(candy => {
      console.log("success!");
      let candies = candy.map(x => x.dataValues);
      console.log(candies);
      res.status(200).send(candies);
    })
    .catch(() => {
      console.log("error in get all candy");
      res.sendStatus(500);
    });
});

// create candy
router.get("/add", (req, res) => {
  console.log("trying to add");

  const data = {
    name: "peppermint swirl",
    candy_image:
      "https://images.unsplash.com/photo-1536679887050-4bdea5bf41c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    candy_type: "sweet"
  };

  let { name, candy_image, candy_type } = data;

  Candy.create({
    name,
    candy_image,
    candy_type
  })
    .then(candy => {
      res.sendStatus(200);
      console.log("success! " + candy);
    })
    .catch(err => {
      res.sendStatus(500);
      console.log("add failure" + err);
    });
});

module.exports = router;
