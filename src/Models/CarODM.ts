import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ModelCRUD from './ModelCRUD';

export default class CarODM extends ModelCRUD<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      // id: { type: String, required: false },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    schema.set('toJSON', {
      transform: (document, returnedObject) => {
        const obj = returnedObject;
        obj.id = obj._id.toString();
        delete obj._id;
        delete obj.__v;
      },
    });
    // Duplicate the ID field.
    // schema.virtual('id').get(function () {
    //   return ((schema as unknown) as ICar)._id;
    // });

    // // Ensure virtual fields are serialised.
    // schema.set('toJSON', {
    //   virtuals: true,
    // });
    super(schema, 'Car');
  }
}
