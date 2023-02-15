import IVehicle from './IVehicle';

export type CyclesCategory = 'Street' | 'Custom' | 'Trail';

export default interface IMotorcycle extends IVehicle {
  category:CyclesCategory;
  engineCapacity:number;
}
