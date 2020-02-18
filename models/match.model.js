const mongoose = require('mongoose')

const MatchSchema = new mongoose.Schema({
    team: {type: mongoose.Schema.Types.ObjectId, required: true}
}, 
{
    timestamps: true
})

const Match = new mongoose.model('Match', MatchSchema)

module.exports = Match