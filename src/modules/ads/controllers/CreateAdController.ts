import { Request, Response } from "express";

import { CreateAdService } from "../services/CreateAdService";

class CreateAdController {
	async handle(req: Request, res: Response): Promise<Response> {
		const createAdService = new CreateAdService();

		const result = createAdService.execute();

		return res.status(201).json([]);
	}
}

export { CreateAdController };
