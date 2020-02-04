const express = require("express");
const router = express.Router();
const Bag = require("../models/Bag");

// get bag content
router.get("/", (req, res) => {
  Bag.findAll()
    .then(bag => {
      console.log("success!");
      console.log(bag);
      res.status(200).send(bag);
    })
    .catch(() => {
      console.log("error in bag router");
      res.status(500);
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
      console.log("success! " + bag.candy_id);
    })
    .catch(err => {
      res.sendStatus(500);
      console.log("add failure" + err);
    });
});

// remove candy from bag
router.delete(`/remove/:id`, (req, res) => {
  Bag.destroy({
    where: {
      candy_id: req.params.id
    }
  })
    .then(() => {
      res.sendStatus(200);
      console.log("candy removed from bag");
    })
    .catch(() => {
      res.sendStatus(500);
      console.log("something went wrong");
    });
});

// remove all candies from bag
router.delete("/eat", (req, res) => {
  Bag.destroy({ where: {} })
    .then(() => {
      res.sendStatus(200);
      console.log("ate bag");
    })
    .catch(() => {
      res.sendStatus(500);
      console.log("something went wrong");
    });
});

module.exports = router;
