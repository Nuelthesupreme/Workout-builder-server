import mongoose from 'mongoose';

const muscleGroups = [
  {
    name: 'Chest',
    description: 'Targeting the chest muscles',
    exercises: [
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ee2'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ee3'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ee4'),
    ],
  },
  {
    name: 'Back',
    description: 'Targeting the back muscles',
    exercises: [
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ee5'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ee6'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ee7'),
    ],
  },
  {
    name: 'Legs',
    description: 'Targeting the leg muscles',
    exercises: [
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ee8'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ee9'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24eea'),
    ],
  },
  {
    name: 'Bicep',
    description: 'Targeting the biceps',
    exercises: [
      mongoose.Types.ObjectId('5f6736477ea36177f5a24eeb'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24eec'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24eed'),
    ],
  },
  {
    name: 'Tricep',
    description: 'Targeting the triceps',
    exercises: [
      mongoose.Types.ObjectId('5f6736477ea36177f5a24eee'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24eef'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ef0'),
    ],
  },
  {
    name: 'Shoulders',
    description: 'Targeting the shoulders',
    exercises: [
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ef1'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ef2'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ef3'),
    ],
  },
  {
    name: 'Abs',
    description: 'Targeting the abs',
    exercises: [
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ef4'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ef5'),
      mongoose.Types.ObjectId('5f6736477ea36177f5a24ef6'),
    ],
  },
];

export default muscleGroups;
