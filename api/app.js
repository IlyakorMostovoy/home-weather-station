require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./lib/db/models");

const app = express();

/**
 * Disable transfer of headers
 */
app.disable("x-powered-by");

/**
 * CORS
 */
const corsOptions = {
  origin: process.env.CLIENT,
};

app.use(cors(corsOptions));

/**
 * Parse request
 */

// Content-Type: application/json
app.use(bodyParser.json());

// Content-Type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Database
 */
db.sequelize.sync();

/**
 * Routes
 */
app.get("/", (req, res) => {
  res.json({ message: "Welcome to API for Home Dashboard" });
});
require("./lib/routes/auth")(app);
require("./lib/routes/user")(app);

/**
 * Set port, listen for requests
 */
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
