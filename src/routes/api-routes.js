import express from 'express';

const router = express.Router();

const getAllWorkouts = (req, res) => {
  res.json({ res: 'all restaurants' });
};

const getAllWorkoutsById = (req, res) => {
  res.json({ res: 'restaurant by id' });
};

router.get('/workouts', getAllWorkouts);

router.get('/workouts/:id', getAllWorkoutsById);

export default router;