import { Game } from "@prisma/client";

import { prisma } from "../../../database/client";

class GetAllGamesService {
	async execute(): Promise<Game[]> {
		const games = await prisma.game.findMany();

		return games;
	}
}

export { GetAllGamesService };
