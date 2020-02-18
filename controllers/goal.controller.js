const mongoose = require('mongoose'),
      Goal = require('../models/goal.model'),
      Player = require('../models/player.model')

module.exports.plus = (req, res) => {
    const goal = new Goal({
        player: req.player._id,
        match: req.match._id
        //zone: 
    })
}