// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// connecting with htmlRoutes page via require
var htmlRoutes = require("./app/routing/htmlRoutes");
// connecting with apiRoutes page via require
var apiRoutes = require("./app/routing/apiRoutes");

// Sets up the Express App
// =============================================================
var app = express();
// run at port 3000
var PORT = 3000;

// Initiate the listener.
app.listen(PORT);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
// =============================================================
// connecting with the htmlRoutes page, calling the htmlRoutes 
// and app argument
htmlRoutes(app);
// calling function from apiRoutespage
apiRoutes(app);


// Basic route that sends the user first to the AJAX Page
// I moved this to the htmlRoutes.js file
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "add.html"));
// });