const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
   zone: {
       topLeft: {type: Number}, 
       top: {type: Number},
       topRight: {type: Number},
       middleLeft: {type: Number},
       middle: {type: Number},
       middleRight: {type: Number},
       bottomLeft: {type: Number},
       bottom: {type: Number},
       bottomRight: {type: Number}
   }, 
   player: { type: mongoose.Schema.Types.ObjectId, ref:'Player' }, 
   match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match'}
})

const Goal = new mongoose.model('Goal', GoalSchema)

module.exports = Goal;