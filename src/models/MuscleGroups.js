import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({})


const MuscleGroups = mongoose.model('muscleGroups', schema);

export default MuscleGroups;