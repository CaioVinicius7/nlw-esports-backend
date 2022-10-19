import { Request, Response } from "express";

import { GetDiscordByAdService } from "../services/GetDiscordByAdService";

class GetDiscordByAdController {
	async handle(req: Request, res: Response): Promise<Response> {
		const { id: adId } = req.params;

		const getDiscordByAdService = new GetDiscordByAdService();

		const result = getDiscordByAdService.execute(adId);

		return res.status(200).json(adId);
	}
}

export { GetDiscordByAdController };
