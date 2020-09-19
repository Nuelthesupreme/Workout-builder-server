import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  muscleGroupId: {
    type: Schema.Types.ObjectId,
    ref: 'muscleGroups'
  },
  selectedExercises: [
    {
      exerciseId: {
        type: Schema.Types.ObjectId,
        ref: 'exercise'
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

const Workout = mongoose.model('workout', schema);

export default Workout;
