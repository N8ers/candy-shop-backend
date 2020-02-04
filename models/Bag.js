const Sequelize = require("sequelize");
const db = require("../config/database");

const Bag = db.define(
  "bag",
  {
    candy_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  },
  { freezeTableName: true }
);

module.exports = Bag;
