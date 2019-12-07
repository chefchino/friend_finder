var friendArray = require("../data/friends");
//console.log("API", friendArray)
module.exports = function(app) {
    app.post("/api/friends", function(req, res) {
        console.log("i'm in")
        // for (i = 0; i < friendArray.length; i++) {

        // }
        friendArray.push(req.body);
        res.send("we hit the route")
    });
    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
    });

};