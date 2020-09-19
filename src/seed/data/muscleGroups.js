import mongoose from 'mongoose';

const muscleGroups = [
  {
    name: 'Chest',
    description: 'Targeting the chest muscles',
    exercises: [
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b06d'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b06e'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b06f'),
    ],
  },
  {
    name: 'Back',
    description: 'Targeting the back muscles',
    exercises: [
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b070'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b071'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b072'),
    ],
  },
  {
    name: 'Legs',
    description: 'Targeting the leg muscles',
    exercises: [
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b073'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b074'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b075'),
    ],
  },
  {
    name: 'Bicep',
    description: 'Targeting the biceps',
    exercises: [
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b076'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b077'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b078'),
    ],
  },
  {
    name: 'Tricep',
    description: 'Targeting the triceps',
    exercises: [
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b079'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b07a'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b07b'),
    ],
  },
  {
    name: 'Shoulders',
    description: 'Targeting the shoulders',
    exercises: [
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b07c'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b07d'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b07e'),
    ],
  },
  {
    name: 'Abs',
    description: 'Targeting the abs',
    exercises: [
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b07f'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b080'),
      mongoose.Types.ObjectId('5f6651ef2ce29d2f0839b081'),
    ],
  },
];

export default muscleGroups;
