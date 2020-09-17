import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  muscleGroups: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  exercises: [
    {
      type: {
        name: String,
        description: String,
      },
      reps: {
        type: Number,
        required: true,
      },
      sets: {
        type: Number,
        required: true,
      },
    },
  ],
  userId: {
    type: String,
    required: true,
  },

});

const Workout = mongoose.model('Workout', schema);

export default Workout;
