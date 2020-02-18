const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    local: { type: Boolean, required: true }
})

const Team = new mongoose.model('Team', TeamSchema)

module.exports = Team;