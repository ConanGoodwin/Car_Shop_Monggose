import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import VehicleService from './VehicleService';

export default class CarService extends VehicleService<ICar> {
  constructor(private carODM: CarODM = new CarODM()) {
    super(carODM);
  }
}