require("dotenv").config();

const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const swaggerDocs = YAML.load("./lib/config/swagger.yaml");
const PORT = process.env.DOCS_PORT || 5000;

// Swagger configuration
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(PORT, () =>
  console.log(`Swagger docs is available http://localhost:${PORT}/api-docs/`)
);
