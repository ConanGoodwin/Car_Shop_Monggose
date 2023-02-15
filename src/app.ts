import express from 'express';
import CarRoute from './routes/Car.route';
import motorcycleRoute from './routes/Motorcycle.route';

const app = express();

app.use(express.json());
app.use('/cars', CarRoute);
app.use('/motorcycles', motorcycleRoute);

export default app;
