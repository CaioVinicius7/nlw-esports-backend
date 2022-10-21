import { Request, Response } from "express";

import { ListAdsByGameService } from "../services/ListAdsByGameService";

class ListAdsByGameController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id: gameId } = req.params;

		const listAdsByGameService = new ListAdsByGameService();

		const result = await listAdsByGameService.execute(gameId);

		return res.status(200).json(result);
	}
}

export { ListAdsByGameController };
