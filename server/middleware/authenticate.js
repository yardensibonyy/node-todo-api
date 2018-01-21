var {User} = require('../models/user');

//middleware
var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject(); //send to catch block 6 lines below
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send(); //401 = auth is required
    });
};

module.exports = {
    authenticate: authenticate
};