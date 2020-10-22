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

router.get("/api/workouts/range", function (req, res) {
    workout.find({}).limit(30)
});

router.post("/api/workouts", function (req, res) {
    console.log(res);
});

router.put("/api/workouts/:id", function (req, res) {
    console.log(req.body)
    workout.findByIdAndUpdate(req.params.id, {
        $push: { exercises: req.body }
    }
});


module.exports = router