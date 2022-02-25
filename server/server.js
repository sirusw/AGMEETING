const express = require("express");
// var fallback = require('express-history-api-fallback')
const app = express();

const path = require("path");
const port = process.env.PORT || 3000;

// import routes from "../client/routes";
const indexRoutes = require("./controllers/index.controller");
const DIST_DIR = path.join(__dirname, "public");
const HTML_FILE = path.join(DIST_DIR, "index.html");

//controllers
const clientController = require("./controllers/client-controller");

//passport
const passport = require("passport");
require("./config/passport");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

app.use(passport.initialize());
app.use(passport.session());

//database
const db = require("./models/index");
const client = require("./models/client");
const allModels = require("./models/index");

app.use("/clients", clientController);

try {
  db.sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
    allModels.client.findAll().then((results) => {
      console.log(results);
    }).catch(err => console.log(err));
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// app.use(express.static("helper"));
// app.use("/", indexRoutes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });

  // do not use this
  // res.sendFile(path.join(__dirname + '/public/index.html'))
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`The app server is running on port: ${port}`);
  });
});

// app.listen(port, () => {
//     console.log(`The app server is running on port: ${port}`);
// });
