import express from 'express';

const router = express.Router();

const getAllWorkouts = (req, res) => {
  res.json({ res: 'workouts' });
};

const getAllWorkoutsById = (req, res) => {
  res.json({ res: 'workouts by id' });
};

router.get('/workouts', getAllWorkouts);

router.get('/workouts/:id', getAllWorkoutsById);

export default router;
