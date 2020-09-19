import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },,
  description: {
    type: String,
    required: false,
  },
  exercises: {
    type: [Schema.Types.ObjectId],
    ref: 'exercises'
  },
})


const MuscleGroups = mongoose.model('muscleGroups', schema);

export default MuscleGroups;