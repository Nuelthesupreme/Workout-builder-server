import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import apiRoutes from './routes/api-routes';
import userAuth from './routes/auth-routes';
import { PORT, DB_URI, MONGOOSE_OPTIONS } from './config/config';
import authenticateUser from './middlewares/authenticateUser';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use('/auth', userAuth);
app.use(authenticateUser);
app.use('/api', apiRoutes);

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
