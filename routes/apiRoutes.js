const router = require("express").Router();
const workout = require("../models/workout")

router.get("/api/workouts", function (req, res) {
    workout.find()
        .then((dbWorkout) => {
            console.log(res)
            res.json(dbWorkout)
        })
        .catch(err => res.json(err))
});

router.get("/api/workouts/range", function (req, res) {
    workout.find({}).limit(30)
        .then((dbWorkout) => {
            console.log(res)
            res.json(dbWorkout)
        })
        .catch(err => res.json(err))
});

router.post("/api/workouts", function (req, res) {
    console.log(res);
    workout.create({}).then((dbWorkout) => {
        res.json(dbWorkout)
    }).catch(err => res.json(err))
});

router.put("/api/workouts/:id", function (req, res) {
    console.log(req.body)
    workout.findByIdAndUpdate(req.params.id, {
        $push: { exercises: req.body }
    },
        { new: true, runValidators: true }
    ).then((dbWorkout) => { res.json(dbWorkout) }).catch(err => res.json(err))
});

router.delete("/api/workouts", function (req, res) {
    workout.findByIdAndDelete(req.body.id).then(() => { res.json(true) }).catch(err => res.json(err))
});

module.exports = router