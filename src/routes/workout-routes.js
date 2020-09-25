import express from 'express';
import db from '../models';

const router = express.Router();

const getUserWorkout = async (req, res) => {
  try {
    const { id } = req.user;

    const allWorkouts = await db.Workout.find({ userId: id })
      .populate([
        { path: 'exercises.exercise' },
        { path: 'muscleGroup', select: 'name description' },
      ])
      .sort({
        createdAt: -1,
      });

    res.status(200).json({ success: true, allWorkouts });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getUserWorkOutById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const workout = await db.Workout.findOne({ _id: id, userId }).populate([
      { path: 'exercises.exercise' },
      { path: 'muscleGroup', select: 'name description' },
    ]);

    res.status(200).json({
      success: true,
      workout,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const createUserWorkOut = async (req, res) => {
  try {
    const { id } = req.user;
    const workout = req.body;

    const newWorkout = await db.Workout.create({ ...workout, userId: id });

    res.status(201).json({ success: true, workout: newWorkout });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteUserWorkOut = async (req, res) => {
  try {
    const { id } = req.params;

    await db.Workout.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updateUserWorkOut = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const data = await db.Workout.findByIdAndUpdate(id, body, { new: true });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

router.get('/workouts', getUserWorkout);
router.get('/workouts/:id', getUserWorkOutById);
router.post('/workouts', createUserWorkOut);
router.put('/workouts/:id', updateUserWorkOut);
router.delete('/workouts/:id', deleteUserWorkOut);

export default router;
