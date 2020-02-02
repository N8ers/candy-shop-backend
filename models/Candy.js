const Sequelize = require("sequelize");
const db = require("../config/database");

const Candy = db.define("candy", {
  name: {
    type: Sequelize.STRING
  },
  candy_image: {
    type: Sequelize.STRING
  },
  candy_type: {
    type: Sequelize.STRING
  }
});

module.exports = Candy;
