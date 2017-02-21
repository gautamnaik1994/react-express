const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub:user.id,iat:timestamp}, config.secret);
};

exports.signin = (req, res, next) => {
    res.send({ token: tokenForUser(req.user) });
};

exports.signup = (req, res, next) => {
    // res.send({ success: 'true' });
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        return res.status(422).send({error:'You must provide e and p'})
    }
    User.findOne({
        email: email
    }).then((existingUser) => {
        if (existingUser) {
            return res.status(422).send({
                error: 'Email in use'
            });
        }
        const user = new User({
            email,
            password
        });
        user.save().then((savedUser) => {
            res.json({ token: tokenForUser(savedUser)});
        }, (err) => {
            return next(err);
        });

    }, (err) => {
        return next(err);
    });
}