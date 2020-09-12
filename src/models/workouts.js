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
  exercises: {
    type: [String],
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
});
const Workout = mongoose.model('workouts', schema);
export default Workout;
