import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  selectedExercises: [
    {
      exerciseId: {
        type: Schema.Types.ObjectId,
        ref: 'exercises'
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

const Workouts = mongoose.model('workouts', schema);

export default Workouts;
