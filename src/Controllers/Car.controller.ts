import { Request, Response } from 'express';
import CarService from '../Services/Car.service';

export default class CarController {
  public async findAll(_req: Request, res: Response) {
    const service = new CarService();
    const { type, message } = await service.findAll();

    if (!type) res.status(200).json(message);

    res.status(500).json({ message });
  }
}