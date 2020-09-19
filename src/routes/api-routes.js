import express from 'express';
import db from '../models';

const router = express.Router();

const getAllWorkouts = async (req, res) => {
  try {
    const { id } = req.user;
    const data = await db.Workouts.find({ userId: id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWorkoutById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db.Workouts.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addWorkouts = async (req, res) => {
  try {
    const content = req.body;
    const data = await db.Workouts.create(content);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const content = req.body;
    const data = await db.Workouts.findByIdAndUpdate(id, content, { upsert: true });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db.Workouts.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

router.get('/workouts', getAllWorkouts);
router.get('/workouts/:id', getWorkoutById);
router.post('/workouts', addWorkouts);
router.put('/workouts/:id', updateWorkout);
router.delete('/workouts/:id', deleteWorkout);

export default router;
