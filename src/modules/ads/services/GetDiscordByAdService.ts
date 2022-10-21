import { prisma } from "@database/client";

interface IResponse {
	discord: string;
}

class GetDiscordByAdService {
	async execute(adId: string): Promise<IResponse> {
		const ad = await prisma.ad.findUniqueOrThrow({
			select: {
				discord: true
			},
			where: {
				id: adId
			}
		});

		return {
			discord: ad.discord
		};
	}
}

export { GetDiscordByAdService };
