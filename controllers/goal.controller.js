const mongoose = require('mongoose'),
      Goal = require('../models/goal.model'),
      Player = require('../models/player.model')


module.exports.plus = (req, res) => {
    const goal = new Goal({
        player: req.body.playerId,
        match: req.params.matchId, 
        zone: req.body.zoneG
    })
}