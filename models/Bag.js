const Sequelize = require("sequelize");
const db = require("../config/database");

const Bag = db.define(
  "bag",
  {
    candy_id: {
      type: Sequelize.STRING
    }
  },
  { freezeTableName: true }
);

module.exports = Bag;
