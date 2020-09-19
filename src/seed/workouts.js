import mongoose from 'mongoose';

import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import db from '../models';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

const workouts = [
  {
    name: "Nuels Workout",
    muscleGroupId: "hash",
    selectedExercises: [
      {
        exerciseId: "hash",
        reps: 12,
        sets: 2
      },
    ],
    userId: "hash",
  },
]

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workouts))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });