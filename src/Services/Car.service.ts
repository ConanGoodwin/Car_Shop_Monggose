import ICar from '../Interfaces/Car.interface';
import IService from '../Interfaces/Service.interface';
import CarODM from '../Models/CarODM';

export default class CarService {
  public findAll = async (): Promise<IService<ICar>> => {
    const carODM = new CarODM();
    const message = await carODM.findAll();

    if (message) return { type: null, message };

    return { type: 'erro', message: 'error' };
  };
}