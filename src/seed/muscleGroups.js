import mongoose from 'mongoose';

import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import db from '../models';
import muscleGroups from './data/muscleGroups';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

db.MuscleGroup.deleteMany({})
  .then(() => db.MuscleGroup.collection.insertMany(muscleGroups))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
