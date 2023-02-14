// import { Model } from 'mongoose';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarODM from '../Models/CarODM';

const CAR_NOT_FOUND = 'Car not found';

export default class CarService {
  // constructor(private carODM: Model<ICar>) {}

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

    return { type: 'NOT_FOUND', message: CAR_NOT_FOUND };
  };

  public update = async (id: string, obj: Partial<ICar>): Promise<IService<ICar>> => {
    const carODM = new CarODM();
    const message = await carODM.update(obj, id);

    if (message === 'INVALID') return { type: 'INVALID', message: 'Invalid mongo id' };
    if (message === 'NOT_FOUND') return { type: 'NOT_FOUND', message: CAR_NOT_FOUND };

    if (message) return { type: null, message };

    return { type: 'NOT_FOUND', message: CAR_NOT_FOUND };
  };
}