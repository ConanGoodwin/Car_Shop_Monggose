import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import VehicleService from './VehicleService';

export default class CarService extends VehicleService<IMotorcycles> {
  constructor(private motorcyclesODM: MotorcyclesODM = new MotorcyclesODM()) {
    super(motorcyclesODM);
  }
}