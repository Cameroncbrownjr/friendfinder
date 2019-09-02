var friends = require("../data/friend.js");


module.exports = function (app) {
    app.get('/friends', (req, res) => res.json(friends));
    app.post("/friends", (req, res) => {
        console.log(req.body)
    });
};