const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller'),
      teamsController = require('../controllers/teams.controller'),
      playerController = require('../controllers/player.controller'),
      matchController = require('../controllers/match.controller'),
      goalController = require('../controllers/goal.controller')
//const authMiddleware = require('../middlewares/auth.middleware')


module.exports = router;

/* USERS */
router.get('/users/new', usersController.new);
router.post('/signup', usersController.create);

/* TEAMS */
router.post('/teams/new', teamsController.create);
router.get('/teams', teamsController.list)


/* PLAYERS */
router.get('/teams/:id/players', playerController.list);
router.post('/teams/:id/players', playerController.create);
router.delete('/teams/:id/players', playerController.delete);

/* MATCHES */

router.post('/matches/new', matchController.create);
router .get('/matches/:id', matchController.get)
router.get('/matches', matchController.list);
router.post('/matches/:id', goalController.plus);



/* LOGS */
router.get('/login', usersController.login);
router.post('/login', usersController.doLogin)
router.post('/logout', usersController.logout)