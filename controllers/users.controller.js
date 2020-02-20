const User = require('../models/user.model'),
    Team = require('../models/team.model'),
    createError = require('http-errors'),
    mongoose = require('mongoose');


module.exports.new = (_, res) => {
    Team.find()
        .then(
            teams => {
                res.render('/user/new', { user: new User(), teams: teams })
            }
        )
        .catch(error => next(error))
}


module.exports.create = (req, res, next) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    user.save()
        .then((user) => res.status(201).json(user))
        .catch(error => next(error))
}

module.exports.edit = (req, res) => {
    const userId = req.currentUser._id;
    User.findOne({ _id: userId })
        .then(
            user => {
                res.render('user/edit', { user: user });
            }
        )
        .catch(error => next(error));
}

module.exports.doEdit = (req, res) => {
    User.findById(req.currentUser._id)
        .then(user => {
            if (user) {
                user.name = req.body.name
                user.email = req.body.email
                user.team = req.body.team

                user.save()
                    .then(() => {
                        res.redirect('/')
                    })
                    .catch(next)
            } else {
                next(createError(404, `user not found`))
            }
        })
        .catch(
            next(error)
        )
}

/* LOGIN & LOGOUT */
module.exports.login = (_, res) => {
    res.render('users/login')
}

module.exports.doLogin = (req, res, next) => {

    console.info('req => ', req.body)

    const { email, password } = req.body;

    if (!email || !password) {
        throw createError(400, 'missing credentials');
    }

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                throw createError(404, 'user not found')
            } else {
                console.info(user)
                req.session.user = user;
                res.json(user)
            }
        })
        .catch(next)
}


module.exports.logout = (req, res) => {
    req.session.destroy();
    res.status(204).json();
}