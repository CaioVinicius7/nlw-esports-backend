import { prisma } from "@database/client";
import { Game } from "@prisma/client";

class GetAllGamesService {
	async execute(): Promise<Game[]> {
		const games = await prisma.game.findMany({
			include: {
				_count: {
					select: {
						ads: true
					}
				}
			}
		});

		return games;
	}
}

export { GetAllGamesService };
