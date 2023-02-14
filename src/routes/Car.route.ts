import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoute = Router();
const carController = new CarController();

CarRoute.post('/', carController.create);
CarRoute.get('/', carController.findAll);
CarRoute.get('/:id', carController.findById);
CarRoute.put('/:id', carController.update);

export default CarRoute;
