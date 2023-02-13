import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoute = Router();
const carController = new CarController();

CarRoute.put('/', carController.create);
CarRoute.get('/', carController.findAll);

export default CarRoute;
