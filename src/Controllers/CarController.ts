import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import statusHttp, { StatusType } from '../utils/statusHTTP';

export default class CarController {
  // private newMessage(car: ICar, message: ICar) {
  //   return { id: message.id, ...car };
  // }

  public async findAll(_req: Request, res: Response) {
    const service = new CarService();
    const { type, message } = await service.findAll();

    if (!type) return res.status(statusHttp.OK).json(message);

    return res.status(500).json({ message });
  }

  public async findById(req: Request, res: Response) {
    const service = new CarService();
    const { id } = req.params;
    const { type, message } = await service.findById(id);

    if (!type) return res.status(statusHttp.OK).json(message);

    return res.status(statusHttp[type as StatusType]).json({ message });
  }

  public async create(req: Request, res: Response) {
    const status = false;

    const car: ICar = {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status || status,
      buyValue: req.body.buyValue,
      doorsQty: req.body.doorsQty,
      seatsQty: req.body.seatsQty,
    };

    const service = new CarService();
    const { type, message } = await service.create(car);
    // const newMessage: ICar = { id: (message as ICar)._id, ...car };

    if (!type) return res.status(statusHttp.CREATED).json(message);

    return res.status(404).json({ message });
  }
}