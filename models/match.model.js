const mongoose = require('mongoose')

const MatchSchema = new mongoose.Schema({
    teamA: {type: mongoose.Schema.Types.ObjectId, required: true},
    teamB: {type: mongoose.Schema.Types.ObjectId, required: true}
}, 
{
    timestamps: true
})

const Match = new mongoose.model('Match', MatchSchema)

module.exports = Match