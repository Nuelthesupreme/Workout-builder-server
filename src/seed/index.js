import mongoose from 'mongoose';

const muscleData = require('./seed');
const Workout = require('../models/index');

const { MONGOOSE_OPTIONS, DB_URI } = require('../config/config');

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

Workout.deleteMany({}).then(() => Workout.Collection.InsectMany(muscleData)).then((data) => {
  console.log(`${data.result.n} records inserted!`);
  process.exit(0);
})
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
