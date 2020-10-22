const router = require("express").Router();
const workout = require("../models/workout")

router.get("/api/workouts", function (req, res) {
    workout.find()
        .then(function (dbWorkout) {
            console.log(res)
            res.json(dbWorkout)
        })
        .catch(err => res.json(err))
});

module.exports = router