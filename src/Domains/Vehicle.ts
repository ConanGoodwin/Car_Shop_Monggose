import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id:string | undefined;
  protected model:string;
  protected year:number;
  protected color:string;
  protected status:boolean;
  protected buyValue:number;

  constructor(objVehicle: IVehicle) {
    const { id, model, year, color, status = false, buyValue } = objVehicle;

    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
  }

  set setId(id: string) {
    this.id = id;
  }

  get getId() {
    return this.id;
  }

  set setModel(model: string) {
    this.model = model;
  }

  get getModel() {
    return this.model;
  }

  set setYear(year: number) {
    this.year = year;
  }

  get getYear() {
    return this.year;
  }

  set setColor(color: string) {
    this.color = color;
  }

  get getColor() {
    return this.color;
  }

  set setStatus(status: boolean) {
    this.status = status;
  }

  get getStatus() {
    return this.status;
  }

  set setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  get getBuyValue() {
    return this.buyValue;
  }
}