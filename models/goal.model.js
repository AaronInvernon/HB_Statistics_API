const mongoose = require('mongoose')



const zoneGoal = ['tLeft','top','tRight','mLeft','middle','mRight','bLeft','bottom','bRight']
const GoalSchema = new mongoose.Schema({
   zone: {type:String, enum: zoneGoal}, 
   player: { type: mongoose.Schema.Types.ObjectId, ref:'Player' }, 
   match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match'}
}, 
{
    timestamps: true,
    toJSON: {
        virtuals: true
    }
})


const Goal = new mongoose.model('Goal', GoalSchema)

module.exports = Goal;