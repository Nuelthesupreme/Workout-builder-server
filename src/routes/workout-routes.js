import express from 'express';
// import db from '../models';

const router = express.Router();

const getUserWorkout = async (req, res) => {
  res.json({ success: 'poop' });
};
const getUserWorkOutById = async (req, res) => {
};
const deleteUserWorkOut = async (req, res) => {
  try {
    const { id: workoutId } = req.params;
    const { id: userId } = req.user;
    const data = await db.Workout.findOneAndDelete({ _id: workoutId, userId });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const createUserWorkOut = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { id } = req.user;
  const { workout } = req.body;
  res.send({ id, workout })
};
const updateUserWorkOut = async () => { };

router.get('/userworkouts', getUserWorkout);
router.get('/userworkouts/:id', getUserWorkOutById);
router.post('/userworkouts', deleteUserWorkOut);
router.put('/userworkouts', createUserWorkOut);
router.delete('/userworkouts/:id', updateUserWorkOut);

export default router;