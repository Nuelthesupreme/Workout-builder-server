import mongoose from 'mongoose';

import db from '../models';

import { DB_URI, MONGOOSE_OPTIONS } from '../config';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

const seed = [{
  muscleGroups: 'chest',
  description: 'chest workout for pectorial muscle',
  exercises: [
    { name: 'Flat Bench press', description: '' },
  ],
  reps: 10,
  sets: 10,
},
{
  muscleGroups: 'chest',
  description: 'chest workout for pectorial muscle',
  exercises: [
    { name: 'Flat Bench press', description: '' },
  ],
  reps: 10,
  sets: 10,
}];

db.Workouts.deleteMany({}).then(() => {
  db.Workouts.collection
    .insertMany(seed)
    .then((data) => {
      console.log(`${data.result.n} workouts inserted!`);
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
});
