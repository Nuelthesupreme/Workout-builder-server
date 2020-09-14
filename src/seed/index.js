import mongoose from 'mongoose';

const { MONGOOSE_OPTIONS, DB_URI } = require('../config/config');

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);
