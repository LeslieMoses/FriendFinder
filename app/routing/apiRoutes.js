//  A GET route with the url /api/friends. This will be used
// to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "??????.html"));
});

//  A POST route with /api/friends. This will be used
// to display a JSON of all possible friends to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
// Create New customers - takes in JSON input

// example from hot restaurant ##
app.post("/api/friends", function(req, res) {
    var buddy = req.body;
    buddy.mobileNumber = buddy.name.replace(/\s+/g, "").toLowerCase();

    console.log(buddy);

    customers.push(buddy);

    res.json(buddy);
});





// Q: Am I just calling the apiRoutes.js file the same way I would call 
// an index.html for a route? What am I missing here?
// KELLY DAVIS:
// in apiRoutes:

// module.exports = <variable for your route object>