import mongoose from 'mongoose';

const muscleGroups = [
  {
    name: 'Chest',
    description: 'Targeting the chest muscles',
    exercises: [
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681832'),
      //
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681833'),
      //
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681834'),
    ],
  },
  {
    name: 'Back',
    description: 'Targeting the back muscles',
    exercises: [
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681835'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681836'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681837'),
    ],
  },
  {
    name: 'Legs',
    description: 'Targeting the leg muscles',
    exercises: [
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681838'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681839'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f468183a'),
    ],
  },
  {
    name: 'Bicep',
    description: 'Targeting the biceps',
    exercises: [
      mongoose.Types.ObjectId('5f665b0286fb4f11f468183b'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f468183c'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f468183d'),
    ],
  },
  {
    name: 'Tricep',
    description: 'Targeting the triceps',
    exercises: [
      mongoose.Types.ObjectId('5f665b0286fb4f11f468183e'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b07f'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681840'),
    ],
  },
  {
    name: 'Shoulders',
    description: 'Targeting the shoulders',
    exercises: [
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681841'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681842'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681843'),
    ],
  },
  {
    name: 'Abs',
    description: 'Targeting the abs',
    exercises: [
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681844'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681845'),
      mongoose.Types.ObjectId('5f665b0286fb4f11f4681846'),
    ],
  },
];

export default muscleGroups;
