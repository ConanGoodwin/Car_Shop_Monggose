import ICar from '../Interfaces/Car.interface';

export default class CarDomain implements ICar {
  private _id:string;
  private _model:string;
  private _year:number;
  private _color:string;
  private _status:boolean;
  private _buyValue:number;
  private _doorsQty:number;
  private _seatsQty:number;
  
  constructor(objCar: ICar) {
    const { model, year, color, status = false, buyValue, doorsQty, seatsQty } = objCar;

    this._id = '0';
    this._model = model;
    this._year = year;
    this._color = color;
    this._status = status;
    this._buyValue = buyValue;
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  }

  set id(id: string) {
    this._id = id;
  }

  get id(): string {
    return this._id;
  }

  set model(model: string) {
    this._model = model;
  }

  get model(): string {
    return this._model;
  }

  set year(year: number) {
    this._year = year;
  }

  get year(): number {
    return this._year;
  }

  set color(color: string) {
    this._color = color;
  }

  get color(): string {
    return this._color;
  }

  set status(status: boolean) {
    this._status = status;
  }

  get status(): boolean {
    return this._status;
  }

  set buyValue(buyValue: number) {
    this._buyValue = buyValue;
  }

  get buyValue(): number {
    return this._buyValue;
  }

  set doorsQty(doorsQty: number) {
    this._doorsQty = doorsQty;
  }

  get doorsQty(): number {
    return this._doorsQty;
  }

  set seatsQty(seatsQty: number) {
    this._seatsQty = seatsQty;
  }

  get seatsQty(): number {
    return this._seatsQty;
  }
}