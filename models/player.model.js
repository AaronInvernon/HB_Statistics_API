const mongoose =  require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {type: String, required:true},
    number: {type: Number, required: true},     
    team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    fails: {type: Number}
})

const Player = new mongoose.model('Player', PlayerSchema)

module.exports = Player;