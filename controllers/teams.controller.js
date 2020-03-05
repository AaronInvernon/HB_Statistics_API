const Team = require('../models/team.model'),
      Player = require('../models/player.model'),
      createError = require('http-errors'),
      mongoose = require('mongoose');



module.exports.create = (req, res, next) => {

    const team = new Team({
        name: req.body.name
    })

    team.save()
        .then((team) => res.status(201).json(team))
        .catch(error => next(error))
}

module.exports.list = (req, res) =>{
    Team.find({})
        .then(teams=> {
            res.status(201).json(teams)
        })
        .catch((error => next(error)));
}

module.exports.edit = () => { 
    const teamId = req.query.teamid
    Team.findById(teamId)
        .then(
            team => {
                res.render('team/edit', {team: team})
            }
        )
        .catch(error => next(error));
}

module.exports.doEdit = (req, res, next) => {
    const teamId = req.query.teamid;
    Team.findById(teamId)
        .then(
            team => {
                if (team) {
                    team.name = req.team.name
                    team.save()
                        .then(() => {
                            res.redirect('/team')
                        })
                        .catch(
                            next(error)
                        )
                } else {
                    next(createError(404, `team not found`))
                }
            }
        )
}
