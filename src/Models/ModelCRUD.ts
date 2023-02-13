import { model, Model, models, Schema } from 'mongoose';

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
}

export default ModelCRUD;