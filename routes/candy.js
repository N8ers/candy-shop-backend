const express = require("express");
const router = express.Router();
const Candy = require("../models/Candy");

// get all candy
router.get("/", (req, res) => {
  Candy.findAll()
    .then(candy => {
      console.log("success!");
      console.log(candy);
      res.sendStatus(200);
    })
    .catch(() => {
      console.log("error in router");
      res.sendStatus(500);
    });
});

// create candy
router.get("/add", (req, res) => {
  console.log("trying to add");
  const data = {
    name: "sour gummies",
    candy_image:
      "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80",
    candy_type: "sour"
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
