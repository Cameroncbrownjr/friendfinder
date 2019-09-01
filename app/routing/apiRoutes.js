var friends = require("../data/friend.js");


module.exports = function (app) {
    app.get('/friends', (req, res) => res.json(friends))
};