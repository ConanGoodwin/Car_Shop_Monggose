import { isValidObjectId, model, Model, models, Schema } from 'mongoose';

abstract class ModelCRUD<T> {
  protected _model: Model<T>;
  protected _schema: Schema;
  protected _modelName: string;

  constructor(schema: Schema, modelName: string) {
    this._schema = schema;
    this._modelName = modelName;
    this._model = models[this._modelName] || model(this._modelName, this._schema);
  }

  public async findAll(): Promise<T[]> {
    // return this._model.find().select({ _id: 0, id: '$_id' });
    // const result = await this._model.find({}, '-_id').select({ id: '$_id' });
    const result = await this._model.find();
    // const formatResult = result.map((item) => ({ ...item.year }));

    return result;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async findById(id: string): Promise<T | null | string> {
    if (!isValidObjectId(id)) return 'invalid';
    
    return this._model.findById({ _id: id });
  }
}

export default ModelCRUD;
