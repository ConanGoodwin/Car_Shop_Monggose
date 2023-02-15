import { Request, Response } from 'express';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcycleSevice from '../Services/MotorcycleService';
import statusHttp, { StatusType } from '../utils/statusHTTP';

export default class MotorcycleController {
  // private newMessage(car: ICar, message: ICar) {
  //   return { id: message.id, ...car };
  // }

  public async findAll(_req: Request, res: Response) {
    const service = new MotorcycleSevice();
    const { type, message } = await service.findAll();

    if (!type) return res.status(statusHttp.OK).json(message);

    return res.status(500).json({ message });
  }

  public async findById(req: Request, res: Response) {
    const service = new MotorcycleSevice();
    const { id } = req.params;
    const { type, message } = await service.findById(id);

    if (!type) return res.status(statusHttp.OK).json(message);

    return res.status(statusHttp[type as StatusType]).json({ message });
  }

  public async update(req: Request, res: Response) {
    const service = new MotorcycleSevice();
    const { id } = req.params;
    const car: IMotorcycles = {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status || false,
      buyValue: req.body.buyValue,
      category: req.body.category,
      engineCapacity: req.body.engineCapacity,
    };
    const { type, message } = await service.update(id, car);

    if (!type) return res.status(statusHttp.OK).json({ id, ...car });

    return res.status(statusHttp[type as StatusType]).json({ message });
  }

  public async create(req: Request, res: Response) {
    const status = false;

    const car: IMotorcycles = {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status || status,
      buyValue: req.body.buyValue,
      category: req.body.category,
      engineCapacity: req.body.engineCapacity,
    };

    const service = new MotorcycleSevice();
    const { type, message } = await service.create(car);
    // const newMessage: ICar = { id: (message as ICar)._id, ...car };

    if (!type) return res.status(statusHttp.CREATED).json(message);

    return res.status(404).json({ message });
  }
}
