import mongoose from 'mongoose';

import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import db from '../models';
import exercises from './data/exercises';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

db.Exercise.deleteMany({})
  .then(() => db.Exercise.collection.insertMany(exercises))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
