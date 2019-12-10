var friendArray = require("../data/friends");
//console.log("API", friendArray)
module.exports = function(app) {
    app.post("/api/friends", function(req, res) {
        console.log("i'm in")
        var newFriend = req.body;
        var newInput = req.body.scores;
        var scoreArray = [];
        var match = 0;
        for (i = 0; i < friendArray.length; i++) {
            var compare = 0;
            for (j = 0; j < newInput.length; j++) {
            compare += (Math.abs(parseInt(friendArray[i].scores[j] - parseInt(newInput[j]))))
            }
            scoreArray.push(compare);
            console.log("compare: " + compare)
        }
        for (var i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i] <= scoreArray[match]) {
                match = i;
            }
        }
        var buddy = friendArray[match];
        console.log(buddy);
        friendArray.push(newFriend);
        res.send("we hit the route")
    });
    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
    });

};