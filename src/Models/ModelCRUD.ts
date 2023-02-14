import { isValidObjectId, model, Model, models, Schema, UpdateQuery } from 'mongoose';

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
    return this._model.find();
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async findById(id: string): Promise<T | null | string> {
    if (!isValidObjectId(id)) return 'invalid';
    
    return this._model.findById({ _id: id });
  }

  public async update(obj: Partial<T>, _id: string): Promise<T | null | string> {
    if (!isValidObjectId(_id)) return 'INVALID';
    if (!this.findById(_id)) return 'NOT_FOUND';

    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
    );
  }
}

export default ModelCRUD;
