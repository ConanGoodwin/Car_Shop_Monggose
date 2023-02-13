import { Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  public async findAll(_req: Request, res: Response) {
    const service = new CarService();
    const { type, message } = await service.findAll();

    if (!type) return res.status(200).json(message);

    return res.status(500).json({ message });
  }

  public async create(req: Request, res: Response) {
    const service = new CarService();
    const { type, message } = await service.create({ ...req.body });

    if (!type) return res.status(201).json(message);

    return res.status(500).json({ message });
  }
}