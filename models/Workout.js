const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date()
    },
    exercise: [{
        name: String,
        type: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number
    }]
});

// add method to calculate total weight
// Workout.method.calcTotalDuration = function() {
//     this.totalDuration = this.exercise.reduce /* (find sum of duration) */
// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;