import { Request, Response } from "express";

import { GetAllGamesService } from "../services/GetAllGamesService";

class GetAllGamesController {
	async handle(req: Request, res: Response): Promise<Response> {
		const getAllGamesService = new GetAllGamesService();

		const result = getAllGamesService.execute();

		return res.status(200).json([]);
	}
}

export { GetAllGamesController };
