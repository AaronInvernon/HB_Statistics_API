const Player = require('../models/player.model'), 
      Team = require('../models/team.model'),
      createError = require('http-errors'),
      mongoose = require('mongoose');

    
module.exports.create = (req, res, next) => {
    
    const player = new Player({
        name: req.body.name,
        number: req.body.number,
        team: req.query.teamId
    })

    player.save()
        .then((player) => res.status(201).json(player))
        .catch(next())
}

module.exports.list = (req, res) => {
    const teamId = req.query.teamId;
    Player.find({team: teamId})
        .then((players) => {res.status(201).json(players)})
        .catch(next())
}

module.exports.doEdit = (req, res) => {
    const playerId = req.params.playerId;
    Player.findByIdAndUpdate(playerId)
}

module.exports.delete = (req, res) => {
    const playerId = req.params.playerId;
    Player.findByIdAndDelete(playerId)
        .then( () => {
            res.redirect()
        })
}