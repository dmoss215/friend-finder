// Routing for API data =========================
var friendData = require("../data/friends.js");



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;
        var userName = newFriend.name;
        var userPhoto = newFriend.photo;

        // convert the 'scores[]' array into an array of integers and assign it to a properly named property on the object
        newFriend.scores = newFriend['scores[]'].map(function (score) {
            return parseInt(score);
        });
        // delete the badly named property
        delete newFriend['scores[]'];

        var userScores = newFriend.scores;

        var bestMatch = {
            name: "",
            photo: "",
            scoreDif: 41
        }


        console.log(newFriend);
        console.log(friendData);

        // Loop through each object in the friendData array
        for (let i = 0; i < friendData.length; i++) {
            var totalDif = 0;
            // Loop through the "score array" for each person in the friend data array
            for (let j = 0; j < friendData[i].scores.length; j++) {
                const element = friendData[i].scores;

                // compare the newFriend data to the score array and get a total difference
                totalDif += Math.abs(parseInt(userScores[j]) - parseInt(element[j]));

                // console.log(totalDif);
                console.log(userScores[j]);
                console.log(element[j]);
                console.log(totalDif);

                // See if the current friend from the friendData array score is lower than the current bestMatch score and replace best match if true
                if (totalDif < bestMatch.scoreDif) {
                    bestMatch.name = friendData[i].name;
                    bestMatch.photo = friendData[i].photo;
                    bestMatch.scoreDif = totalDif;
                }

            }


        }
        // respond with best match
        res.json(bestMatch);

        // push the new friend into friendData array
        friendData.push(newFriend);
    });
}