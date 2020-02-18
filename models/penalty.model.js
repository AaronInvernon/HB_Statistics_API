const mongoose = require('mongoose')
const Penalties = ["Yellow","2min", "Red", "Blue"]

const PenaltySchema = new mongoose.Schema({
    Type: {type: String, enum: Penalties }, 
    player: { type: mongoose.Schema.ObjectId, ref: 'Player'},
    match: { type: mongoose.Schema.ObjectId, ref: 'Match' }

}, 
{
    timestamps: true
});

const Penalty = new mongoose.model('Penalty',PenaltySchema)

model.exports = Penalty;