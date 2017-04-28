//  var path = require("path");
//  A GET route with the url /api/friends. This will be used
// to display a JSON of all possible friends.
var friendData = require("../data/friends");
var app = express();

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
// Kelly Davis' post
// in apiRoutes:
module.exports = variable
for your route object

    in server.js:
    var apiRoutes = require("./routing/apiRoutes");
app.use(apiRoutes);

// from Eric Fry's work
// app.get('/api/friends', function(req, res) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(tables));
// })

//  A POST route with /api/friends 
// to display a JSON of all possible friends to handle incoming survey results. 
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





// Q: Am I just calling the apiRoutes.js file the same way I would call 
// an index.html for a route? What am I missing here?
// KELLY DAVIS:
// in apiRoutes:

// module.exports = <variable for your route object>