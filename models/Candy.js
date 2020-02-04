const Sequelize = require("sequelize");
const db = require("../config/database");

const Candy = db.define(
  "candy",
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING
    },
    candy_image: {
      type: Sequelize.STRING
    },
    candy_type: {
      type: Sequelize.STRING
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

module.exports = Candy;
