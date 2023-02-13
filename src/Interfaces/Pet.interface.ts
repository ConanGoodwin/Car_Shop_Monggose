export default interface IPet {
  id?:string;
  model:string;
  year:number;
  color:string;
  status?:boolean;
  buyValue:number;
  doorsQty:number;
  seatsQty:number;
}