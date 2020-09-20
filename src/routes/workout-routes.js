import express from 'express';
import db from '../models';

const router = express.Router();

const getUserWorkout = async (req, res) => {
  res.json({ success: 'poop' });
};
const getUserWorkOutById = async (req, res) => {};
const deleteUserWorkOut = async (req, res) => {};
const createUserWorkOut = async (req, res) => {};
const updateUserWorkOut = async (req, res) => {};

router.get('/userworkouts', getUserWorkout);
router.get('/userworkouts/:id', getUserWorkOutById);
router.post('/userworkouts', deleteUserWorkOut);
router.put('/userworkouts/:id', createUserWorkOut);
router.delete('/userworkouts/:id', updateUserWorkOut);
