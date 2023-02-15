import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoute = Router();
const motorcycleController = new MotorcycleController();

motorcycleRoute.post('/', motorcycleController.create);
motorcycleRoute.get('/', motorcycleController.findAll);
motorcycleRoute.get('/:id', motorcycleController.findById);
motorcycleRoute.put('/:id', motorcycleController.update);

export default motorcycleRoute;