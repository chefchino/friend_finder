var friendArray = require("../data/friends");

module.exports = function(app) {
    app.get("/api/survey", function(req, res) {
        res.json(friendArray);
    });

    app.post("/api/friends", function(req, res) {
        friendArray.push(req.body);
        res.json(true);
    });
};