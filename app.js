const express = require("express");
const bodyParser = require("body-parser");

// connect to db
const db = require("./config/database");

// test db connection
db.authenticate()
  .then(() => console.log("db connected!"))
  .catch(() => console.log("error: " + err));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/candy", require("./routes/candy"));
app.use("/bag", require("./routes/bag"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
