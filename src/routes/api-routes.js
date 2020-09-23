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

const getUpdateParams = (requestBody) => {
  let params = {};
  let set = {};

  const { action } = requestBody;

  if (requestBody.name) {
    set = { ...set, name: requestBody.name };
    params = {
      ...params,
      $set: set,
    };
  }

  if (requestBody.muscleGroup) {
    set = { ...set, muscleGroup: requestBody.muscleGroup, exercises: requestBody.exercises || [] };
    params = {
      ...params,
      $set: set,
    };
  }

  if (action === 'add') {
    params = {
      ...params,
      ...set,
      $push: { exercises: requestBody.exercises },
    };
  }

  if (action === 'remove') {
    const exercises = requestBody.exercises.map(({ exercise }) => exercise);
    params = {
      ...params,
      ...set,
      $pull: {
        exercises: {
          exercise: {
            $in: exercises,
          },
        },
      },
    };
  }

  return params;
};

const updateWorkout = async (req, res) => {
  try {
    const { id: workoutId } = req.params;
    const { id: userId } = req.user;
    const data = await db.Workout.findOneAndUpdate(
      { _id: workoutId, userId },
      getUpdateParams(req.body),
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

// const saveWorkout = async (req, res) => {
//   try {
//     const { id: workoutId } = req.params;
//     const { id: userId } = req.user;
//     const data = await db.workout.create({ _id: workoutId, userId });
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// };

// const getAllWorkouts = async (req, res) => {
//   try {
//     const { id } = req.user;
//     const data = await db.workout.find({ userId: id });
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const getExercisesForMuscleGroup = async (req, res) => {
  try {
    const { id: muscleGroupId } = req.params;

    const data = await db.MuscleGroup.findById(muscleGroupId).populate('exercises');

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getMuscleGroups = async (_, res) => {
  try {
    const data = await db.MuscleGroup.find({}).populate('exercises');

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
//router.post('/saveWorkout', saveWorkout);
//router.get('/myWorkout', getAllWorkouts);

router.get('/muscleGroups', getMuscleGroups);
router.get('/muscleGroups/:id/exercises', getExercisesForMuscleGroup);

export default router;
