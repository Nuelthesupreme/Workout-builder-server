import mongoose from 'mongoose';

const workouts = [
  {
    name: 'chest',
    muscleGroupId: mongoose.Types.ObjectId('5f66552f45316d738c81faa7'),
    selectedExercises: [
      {
        exerciseId: mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b06d'),
        reps: 10,
        sets: 4,
      },
      {
        exerciseId: mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b06e'),
        reps: 10,
        sets: 4,
      },
      {
        exerciseId: mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b06f'),
        reps: 12,
        sets: 5,
      },
    ],
    userId: 'hash',
  },

];

export default workouts;
