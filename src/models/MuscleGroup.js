import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'exercise'
    }
  ],
})


const MuscleGroup = mongoose.model('muscleGroup', schema);

export default MuscleGroup;