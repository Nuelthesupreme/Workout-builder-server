import mongoose from 'mongoose';

import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import db from '../models';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

const exercises = [
  {
    name: 'Flat Bench Press',
    description: 'Lie down flat on a bench, use a barbell to press from your chest.',
  },
  {
    name: 'Incline dumbbell flyes',
    description: 'Lie down flat on a bench, use a barbell to press from your chest.',
  },
];

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
