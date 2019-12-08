var friendArray = require("../data/friends");
//console.log("API", friendArray)
module.exports = function(app) {
    app.post("/api/friends", function(req, res) {
        console.log("i'm in")
        var newInput = req.body
        var matchName = "";
        var matchPic = "";
        var difference = 100;
        for (i = 0; i < friendArray.length; i++) {
            var compare = 0;
            for (j = 0; j < newInput.length; j++) {
                compare += Math.abs(friendArray[i].scores - newInput[j]);
            }
            if (compare < difference) {
                difference = compare
                matchName = friendArray[i].friendName;
                matchPic = friendArray [i].linkToPic;
            }
        }
        friendArray.push(newInput);
        res.send("we hit the route")
    });
    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
    });

};