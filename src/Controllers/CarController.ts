import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  public async findAll(_req: Request, res: Response) {
    const service = new CarService();
    const { type, message } = await service.findAll();

    if (!type) return res.status(200).json(message);

    return res.status(500).json({ message });
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
    const newMessage: ICar = { id: (message as ICar).id, ...car };

    if (!type) return res.status(201).json(newMessage);

    return res.status(500).json({ message });
  }
}