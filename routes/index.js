// Use Router to route requests
const router = require("express").Router();
const path = require("path");

// database
const db = require("../models");

// api routes
router.get("/api/workouts", (req, res) => {
    // res.json all the workouts from workout collection
    db.Workouts.find()
        .then(data => {
            res.json(data)
        })
        .catch(e => { res.json(e) })
})

router.post("/api/workouts", (req, res) => {
    // const workout = new db.Workouts()
    // console.log(workout);

    workout = new db.Workouts();
    workout.calcTotalDuration();

    db.Workouts.create(workout)
        .then(data => {
            res.json(data)
        })
        .catch(e => { console.log(e) })

})

router.put("/api/workouts:id", (req, res) => {
    // push new exercise

    // update workout by id db.workout.find({_id: mongojs.ObjectId(req.params.id)}) with req.body data
    // $set: {$push: {exercise: req.body}}

    // respond w/ db response (pass data back to front end)   

})







// html routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});



module.exports = router;