var {User} = require('../models/user');

//middleware
var authenticate = (req, res, next) => {
    var token = req.header('x-auth'); //res.header -> to set the key:value pair || req.header -> to get the key:value pair

    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject(); //Promise.reject sends to catch block 6 lines below
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send(); //401 status code = authentication is required
    });
};

module.exports = {authenticate};