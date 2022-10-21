import { Request, Response } from "express";

import { CreateAdService } from "../services/CreateAdService";

class CreateAdController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id: gameId } = req.params;
		const { body } = req;

		const createAdService = new CreateAdService();

		const result = await createAdService.execute({ gameId, ...body });

		return res.status(201).json(result);
	}
}

export { CreateAdController };
