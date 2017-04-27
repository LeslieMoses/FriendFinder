var path = require("path");

// app as a param to connect with other server.js page
// preparing func to recieve somthing


module.exports = function(app) {
    // do i need more direct path to this folder? ../public/
    app.get("/", function(req, res) {
        // allows u to join current dir name and combine with string for a consistent path name
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // trying other stuff
    app.get('/blocks', function(req, res) {
        var blocks = "<ul><li>fixed</li><li>movable</li></ul>"

    });

    // do i need more direct path to this folder? ../public/
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}