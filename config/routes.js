const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')
const teamsController = require('../controllers/teams.controller')
//const authMiddleware = require('../middlewares/auth.middleware')


module.exports = router;

/* USERS */
router.post('/users', usersController.create);

/* TEAMS */
router.post('/teams', teamsController.create);
//router.get('/teams/:teamname', teamsController.profile);

/* PLAYERS */

router.get('/login', usersController.login);
router.post('/login', usersController.doLogin)
router.post('/logout', usersController.logout)