import mongoose from 'mongoose';

import { DB_URI, MONGOOSE_OPTIONS } from '../config';
import db from '../models';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

const muscleGroups = [
  {
    name: "Chest",
    description: "Targeting the upper pectoral muscles",
    exercises: ["hash", "hash", "hash"],
  },
  {
    name: "Back",
    description: "Targeting the back muscles",
    exercises: ["hash", "hash", "hash"],
  },
  {
    name: "Legs",
    description: "Targeting the upper thigh to calves",
    exercises: ["hash", "hash", "hash"],
  }
]

db.Exercise.deleteMany({})
  .then(() => db.Exercise.collection.insertMany(muscleGroups))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });