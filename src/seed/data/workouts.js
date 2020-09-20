import mongoose from 'mongoose';

const workouts = [
  {
    name: '15 minute chest plan',
    muscleGroup: mongoose.Types.ObjectId('5f6736eac3220979780dd11c'),
    exercises: [
      {
        exercise: mongoose.Types.ObjectId('5f6736477ea36177f5a24ee2'),
        reps: 10,
        sets: 4,
      },
      {
        exercise: mongoose.Types.ObjectId('5f6736477ea36177f5a24ee3'),
        reps: 10,
        sets: 4,
      },
      {
        exercise: mongoose.Types.ObjectId('5f6736477ea36177f5a24ee4'),
        reps: 12,
        sets: 5,
      },
    ],
    userId: '5f6737b6fb84297a2029ec97',
  },
  {
    name: '10 minute ab workout',
    muscleGroup: mongoose.Types.ObjectId('5f6736eac3220979780dd122'),
    exercises: [
      {
        exercise: mongoose.Types.ObjectId('5f6736477ea36177f5a24ef4'),
        reps: 10,
        sets: 4,
      },
      {
        exercise: mongoose.Types.ObjectId('5f6736477ea36177f5a24ef5'),
        reps: 10,
        sets: 4,
      },
    ],
    userId: '5f6737a7fb84297a2029ec96',
  },
];

export default workouts;
