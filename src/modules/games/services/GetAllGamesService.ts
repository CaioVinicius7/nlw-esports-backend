import { prisma } from "@database/client";
import { Game } from "@prisma/client";

class GetAllGamesService {
	async execute(): Promise<Game[]> {
		const games = await prisma.game.findMany();

		return games;
	}
}

export { GetAllGamesService };
