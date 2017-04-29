//  var path = require("path");
//  A GET route with the url /api/friends. This will be used
// to display a JSON of all possible friends.
var friendData = require("../data/friends");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// path and callback function that runs each time get request is called on that path
//   takes request and response object...
// ...to send back what's underneath, i.e. res.send("hello, world")
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        // json'ing the frinedData result
        res.json(friendData);

        //    if you send the file its not going to show as json 
        // res.sendFile(path.join(__dirname, "friends.js"));
        //   res.JSON(path.join(__dirname, "friends.js"));

        // OR
        // res.send(JSON.stringify(friends));
    });
};


//     in server.js:
//     var apiRoutes = require("./routing/apiRoutes");
// app.use(apiRoutes);

// Create New customers - takes in JSON input
app.post("/api/new", function(req, res) {
    var newCustomers = req.body;
    //newCustomers.mobileNumber = newCustomers.name.replace(/\s+/g, "").toLowerCase();

    console.log(newCustomers);

    customers.push(newCustomers);

    res.json(newCustomers);
});


// from Eric Fry's hot restaurant
// linking code in your app.post route would be best. You should be able 
// to add to and update the friends.js array from within that post route.
app.post('/api/friends', function(req, res) {

    var buddy = {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores
    };
    console.log(res.buddy);
    // if (tables.length >= MAX_TABLES)
    //     waitingList.push(reservation);
    // else
    //     tables.push(reservation);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(buddy));
});

//  A POST route with /api/friends 
// to display a JSON of all possible friends 
// to handle incoming survey results. 
// This route will also handle the compatibility logic.
// Create New customers - takes in JSON input


//     app.post("/api/friends", function(req, res) {
//         var buddy = req.body;
//         buddy.mobileNumber = buddy.name.replace(/\s+/g, "").toLowerCase();

//         console.log(buddy);

//         customers.push(buddy);

//         res.json(buddy);


//    if you send the file its not going to show as json 
// res.sendFile(path.join(__dirname, "friends.js"));
//   res.JSON(path.join(__dirname, "friends.js"));

// OR
// res.send(JSON.stringify(friends));
//});
//};

// example from Eric Fry's hot restaurant ##


// example from hot restaurant ##
// for a post req, we need to install a middleware -dutch guy on vid
// POST, GET: all we're doing is transmitting vars and their content bt 2 compters...
// app.POST("/api/friends", function(req, res) {
//     var buddy = req.body;
//     buddy.mobileNumber = buddy.name.replace(/\s+/g, "").toLowerCase();

//     console.log(buddy);

//     customers.push(buddy);

//     res.json(buddy);
// });