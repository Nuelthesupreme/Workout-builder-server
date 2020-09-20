import express from 'express';
import db from '../models';

const router = express.Router();

const getWorkouts = async (req, res) => {
  try {
    const { id } = req.user;
    const data = await db.Workout
      .find({ userId: id })
      .populate({ path: 'muscleGroup', select: 'name description' })
      .populate('exercises.exercise');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWorkout = async (req, res) => {
  try {
    const { id: workoutId } = req.params;
    const { id: userId } = req.user;
    const data = await db.Workout
      .findOne({ _id: workoutId, userId })
      .populate({ path: 'muscleGroup', select: 'name description' })
      .populate('exercises.exercise');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createWorkout = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { name, muscleGroup, exercises } = req.body;
    const workout = {
      name, muscleGroup, exercises, userId,
    };
    const data = await db.Workout.create(workout);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id: workoutId } = req.params;
    const { id: userId } = req.user;
    const content = req.body;
    const data = await db.Workout.findOneAndUpdate(
      { _id: workoutId, userId },
      content,
      { new: true },
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const { id: workoutId } = req.params;
    const { id: userId } = req.user;
    const data = await db.Workout.findOneAndDelete({ _id: workoutId, userId });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

router.get('/workouts', getWorkouts);
router.post('/workouts', createWorkout);
router.get('/workouts/:id', getWorkout);
router.put('/workouts/:id', updateWorkout);
router.delete('/workouts/:id', deleteWorkout);

export default router;
