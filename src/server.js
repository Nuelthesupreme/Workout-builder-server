import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const apiRoutes = require('./routes/api-routes');
const { PORT, DB_URI, MONGOOSE_OPTIONS } = require('./config');

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use('/api', apiRoutes);

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
