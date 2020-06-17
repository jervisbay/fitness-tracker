// Use Router to route requests
const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout.js")

// database
const db = require("../models");

// api routes
router.get("/api/workouts", (req, res) => {
    // res.json all the workouts from workout collection
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(e => { res.json(e) })
})

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(data => {
            res.json(data)
        })
        .catch(e => { console.log(e) })

})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(data => { res.json(data) })
        .catch(e => { res.json(e) })
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(data => {
            console.log(data);
            res.json(data)
        })
        .catch(e => { console.log(e) })
})



// html routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});



module.exports = router;