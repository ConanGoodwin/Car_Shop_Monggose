import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarODM from '../Models/CarODM';

export default class CarService {
  public findAll = async (): Promise<IService<ICar>> => {
    const carODM = new CarODM();
    const message = await carODM.findAll();

    if (message) return { type: null, message };

    return { type: 'erro', message: 'error' };
  };

  public create = async (objCar: ICar): Promise<IService<ICar>> => {
    const carODM = new CarODM();
    const message = await carODM.create(objCar);

    if (message) return { type: null, message };

    return { type: 'erro', message: 'error' };
  };

  public findById = async (id: string): Promise<IService<ICar>> => {
    const carODM = new CarODM();
    const message = await carODM.findById(id);

    if (message === 'invalid') return { type: 'INVALID', message: 'Invalid mongo id' };

    if (message) return { type: null, message };

    return { type: 'NOT_FOUND', message: 'Car not found' };
  };
}