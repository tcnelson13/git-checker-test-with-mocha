
// this creates an instance of gitService (b/c of the ())
// or you can say it returned a function and we executed it
var gitService = require('../services/gitService')();
module.exports = function () {
    var userGet = function (req, res) {
        var userId = req.params.userId;

        gitService.getUser(userId).then(function (user) {
            res.json(user);
        });

    }
    return {
        userGet: userGet
    }
};