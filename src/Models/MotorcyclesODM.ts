import { Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';
import ModelCRUD from './AbstractODM';

export default class MotorcyclesODM extends ModelCRUD<IMotorcycles> {
  constructor() {
    const schema = new Schema<IMotorcycles>({
      // id: { type: String, required: false },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    schema.set('toJSON', {
      transform: (_document, returnedObject) => {
        const obj = returnedObject;
        obj.id = obj._id.toString();
        delete obj._id;
        delete obj.__v;
      },
    });

    super(schema, 'Motorcycle');
  }
}
