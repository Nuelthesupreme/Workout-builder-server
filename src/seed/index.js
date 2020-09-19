import mongoose from 'mongoose';

import { MONGOOSE_OPTIONS, DB_URI } from '../config';

import db from '../models';
import seed from './seed';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

db.Workouts.deleteMany({})
  .then(() => db.Workouts.collection.insertMany(seed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
