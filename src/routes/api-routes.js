import express from 'express';
import db from '../models';

const router = express.Router();

const getExercisesForMuscleGroup = async (req, res) => {
  try {
    const { id: muscleGroupId } = req.params;

    const data = await db.MuscleGroup.findById(muscleGroupId).populate(
      'exercises'
    );

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

router.get('/muscleGroups', getMuscleGroups);
router.get('/muscleGroups/:id/exercises', getExercisesForMuscleGroup);

export default router;

/*
  Commented out in favour of `updateUserWorkout` for simplicity,
  This will be controlled by the frontend
*/
// const getUpdateParams = (requestBody) => {
//   let params = {};
//   let set = {};

//   const { action } = requestBody;

//   if (requestBody.name) {
//     set = { ...set, name: requestBody.name };
//     params = {
//       ...params,
//       $set: set,
//     };
//   }

//   if (requestBody.muscleGroup) {
//     set = { ...set, muscleGroup: requestBody.muscleGroup, exercises: requestBody.exercises || [] };
//     params = {
//       ...params,
//       $set: set,
//     };
//   }

//   if (action === 'add') {
//     params = {
//       ...params,
//       ...set,
//       $push: { exercises: requestBody.exercises },
//     };
//   }

//   if (action === 'remove') {
//     const exercises = requestBody.exercises.map(({ exercise }) => exercise);
//     params = {
//       ...params,
//       ...set,
//       $pull: {
//         exercises: {
//           exercise: {
//             $in: exercises,
//           },
//         },
//       },
//     };
//   }

//   return params;
// };

// const updateWorkout = async (req, res) => {
//   try {
//     const { id: workoutId } = req.params;
//     const { id: userId } = req.user;
//     const data = await db.Workout.findOneAndUpdate(
//       { _id: workoutId, userId },
//       getUpdateParams(req.body),
//       { new: true },
//     );
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// };
