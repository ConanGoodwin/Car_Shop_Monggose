import IService from '../Interfaces/IService';
import ModelCRUD from '../Models/AbstractODM';

const CAR_NOT_FOUND = 'Car not found';

export default class VehicleService<T> {
  constructor(private VehicleODM: ModelCRUD<T>) {}

  public findAll = async (): Promise<IService<T>> => {
    const message = await this.VehicleODM.findAll();

    if (message) return { type: null, message };

    return { type: 'erro', message: 'error' };
  };

  public create = async (obj: T): Promise<IService<T>> => {
    const message = await this.VehicleODM.create(obj);

    if (message) return { type: null, message };

    return { type: 'erro', message: 'error' };
  };

  public findById = async (id: string): Promise<IService<T>> => {
    const message = await this.VehicleODM.findById(id);

    if (message === 'invalid') return { type: 'INVALID', message: 'Invalid mongo id' };

    if (message) return { type: null, message };

    return { type: 'NOT_FOUND', message: CAR_NOT_FOUND };
  };

  public update = async (id: string, obj: Partial<T>): Promise<IService<T>> => {
    const message = await this.VehicleODM.update(obj, id);

    if (message === 'INVALID') return { type: 'INVALID', message: 'Invalid mongo id' };
    if (message === 'NOT_FOUND') return { type: 'NOT_FOUND', message: CAR_NOT_FOUND };

    if (message) return { type: null, message };

    return { type: 'NOT_FOUND', message: CAR_NOT_FOUND };
  };
}