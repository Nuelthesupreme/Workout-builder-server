import express from 'express';

const db = require('../models/index');

const router = express.Router();

const postWorkouts = (req, res) => {
  db.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getWorkouts = (req, res) => {
  db.Workout.find().then((response) => {
    res.json(response);
  }).catch((err) => {
    res.json(err);
  });
};

const deleteWorkout = ({ body }, res) => {
  db.Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    }).catch((err) => {
      res.status(400).json(err);
    });
};

const updateWorkout = ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// const getAllWorkouts = (req, res) => {
// res.json({ res: 'workouts' });
// };

// const getAllWorkoutsById = (req, res) => {
// res.json({ res: 'workouts by id' });
// };

router.get('/workouts', getWorkouts);
router.get('/exercises', getWorkouts);
router.post('/workouts', postWorkouts);
router.put('/workouts/:id', updateWorkout);
router.delete('/workouts', deleteWorkout);

// router.get('/workouts', getAllWorkouts);

// router.get('/workouts/:id', getAllWorkoutsById);

export default router;
