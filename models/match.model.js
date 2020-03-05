const mongoose = require('mongoose')

const MatchSchema = new mongoose.Schema({
    teamA: {type: mongoose.Schema.Types.ObjectId, required: true, ref:'Team'},
    teamB: {type: mongoose.Schema.Types.ObjectId, required: true, ref:'Team'}
}, 
{
    timestamps: true,
    toJSON: {
        virtuals: true
    }
})

MatchSchema.virtual('goal', {
    ref:'Goal', 
    foreignField: 'match',
    localField: '_id',
    justOne: false
})



const Match = new mongoose.model('Match', MatchSchema)

module.exports = Match