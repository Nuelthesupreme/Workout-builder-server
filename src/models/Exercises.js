import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({})

const Exercises = mongoose.model('exercises', schema);

export default Exercises;