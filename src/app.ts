import express from 'express';
import CarRoute from './routes/Car.route';

const app = express();

app.use(express.json());
app.use('/cars', CarRoute);

export default app;
