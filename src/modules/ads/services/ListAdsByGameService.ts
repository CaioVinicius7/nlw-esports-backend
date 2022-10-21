import { prisma } from "@database/client";
import { convertMinutesToHourString } from "@utils/convert-minutes-to-hour-string";

interface IResponse {
	id: string;
	name: string;
	weekDays: string[];
	useVoiceChannel: boolean;
	yearsPlaying: number;
	hourStart: string;
	hourEnd: string;
}

class ListAdsByGameService {
	async execute(gameId: string): Promise<IResponse[]> {
		const ads = await prisma.ad.findMany({
			select: {
				id: true,
				name: true,
				weekDays: true,
				useVoiceChannel: true,
				yearsPlaying: true,
				hourStart: true,
				hourEnd: true
			},
			where: {
				gameId
			},
			orderBy: {
				createdAt: "desc"
			}
		});

		return ads.map((ad) => {
			return {
				...ad,
				weekDays: ad.weekDays.split(","),
				hourStart: convertMinutesToHourString(ad.hourStart),
				hourEnd: convertMinutesToHourString(ad.hourEnd)
			};
		});
	}
}

export { ListAdsByGameService };
