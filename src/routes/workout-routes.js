import express from 'express';
import db from '../models';

const router = express.Router();

const getUserWorkout = async (req, res) => {
  try {
    const { user: { id } } = req;
    console.log(req.user);
    const allWorkouts = await db.workout.find({ userId: id }).sort({ createdAt: -1 });
    res.json({ allWorkouts });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getUserWorkOutById = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await db.workout.findOne({ _id: id });
    res.status(201).json({
      success: true,
      workout,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteUserWorkOut = async (req, res) => {
  try {
    const { id } = req.params;
    await db.workout.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const createUserWorkOut = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { id } = req.user;
  const { workout } = req.body;
  res.send({ id, workout });
};
const updateUserWorkOut = async () => { };

router.get('/userworkouts', getUserWorkout);
router.get('/userworkouts/:id', getUserWorkOutById);
router.post('/userworkouts', deleteUserWorkOut);
router.put('/userworkouts', createUserWorkOut);
router.delete('/userworkouts/:id', updateUserWorkOut);

export default router;
