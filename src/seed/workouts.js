import mongoose from 'mongoose';

import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import db from '../models';
import workouts from "./data/workouts";

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);



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
