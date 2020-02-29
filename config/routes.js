const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller'),
      teamsController = require('../controllers/teams.controller'),
      playerController = require('../controllers/player.controller'),
      matchController = require('../controllers/match.controller')
//const authMiddleware = require('../middlewares/auth.middleware')


module.exports = router;

/* USERS */
router.get('/users/new', usersController.new);
router.post('/signup', usersController.create);

/* TEAMS */
router.post('/teams', teamsController.create);
router.get('/teams/:teamid', teamsController.edit);
router.post('/teams/:teamid', teamsController.doEdit);


/* PLAYERS */
router.get('/teams/:teamid/players', playerController.list);
router.post('/teams/:teamid/player', playerController.create);
router.delete('/teams/:teamid/player', playerController.delete);

/* MATCHES */




/* LOGS */
router.get('/login', usersController.login);
router.post('/login', usersController.doLogin)
router.post('/logout', usersController.logout)