const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
}, 
{
    timestamps: true,
    toJSON: {
        virtuals: true
    }
})

TeamSchema.virtual('players', {
    ref: 'Player', 
    foreignField: 'team',
    localField: '_id', 
    justOne: false
})


const Team = new mongoose.model('Team', TeamSchema)

module.exports = Team;