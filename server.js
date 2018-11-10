const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const connection = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


require("./routes/api-routes.js")(app);


connection.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
});

module.exports = app;