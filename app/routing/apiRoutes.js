var friends = require("../data/friend.js");


module.exports = function (app) {
    app.get('/friends', (req, res) => res.json(friends));
    app.post("/friends", (req, res) => {
        var friend = {}
        friend.name = req.body.name
        friend.picture = req.body.picture
        friend.questions = req.body.questions.map(i => parseInt(i))
        console.log(friend)
        friends.push(friend)
    });
};