import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  externalLink: {
    type: String,
    required: true,
  },
  equipments: [{
    type: String,
    required: true,
  }],
});

const Exercise = mongoose.model('exercise', schema);

export default Exercise;
