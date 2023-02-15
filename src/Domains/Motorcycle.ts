import IMotorcycles, { CyclesCategory } from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category:CyclesCategory;
  private engineCapacity:number;
  
  constructor(objCar: IMotorcycles) {
    super(objCar);
    const { category, engineCapacity } = objCar;

    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  set setCategory(category: CyclesCategory) {
    this.category = category;
  }

  get getCategory() {
    return this.category;
  }

  set setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  get getEngineCapacity() {
    return this.engineCapacity;
  }
}
