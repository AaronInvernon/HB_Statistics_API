const Match = require('../models/match.model'),
      Team = require('../models/team.model'),
      Goal = require('../models/goal.model'),
      createError = require('http-errors'),
      mongoose = require('mongoose');



module.exports.create = (req, res) => {
    const match = new Match ({
        teamA: req.body.teamA,
        teamB: req.body.teamB
    })

    match.save()
        .then((match) => res.status(201).json(match))
        .catch(error => next(error))
}

module.exports.showScore = (_, res, next) => {

}

module.exports.showTime;