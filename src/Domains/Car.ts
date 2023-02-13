import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty:number;
  private seatsQty:number;
  
  constructor(objCar: ICar) {
    super(objCar);
    const { doorsQty, seatsQty } = objCar;

    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  set setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  get getDoorsQty() {
    return this.doorsQty;
  }

  set setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  get getSeatsQty() {
    return this.seatsQty;
  }
}