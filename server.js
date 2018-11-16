const express = require("express");
const app = express();
var sequelize = require("sequelize");
const PORT = process.env.JAWSDB_URL || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);



  app.listen(PORT, function() {
    console.log(`App listening on JAWSDB_URL ${PORT}`);
  });


module.exports = app;
