import { Ad } from "@prisma/client";
import { prisma } from "@database/client";
import { convertHourStringToMinutes } from "@utils/convert-hour-string-to-minutes";

interface IRequest {
	gameId: string;
	name: string;
	yearsPlaying: number;
	discord: string;
	weekDays: number[];
	hourStart: string;
	hourEnd: string;
	useVoiceChannel: boolean;
}

class CreateAdService {
	async execute({
		gameId,
		name,
		yearsPlaying,
		discord,
		weekDays,
		hourStart,
		hourEnd,
		useVoiceChannel
	}: IRequest): Promise<Ad> {
		const ad = await prisma.ad.create({
			data: {
				gameId,
				name,
				yearsPlaying,
				discord,
				weekDays: weekDays.join(","),
				hourStart: convertHourStringToMinutes(hourStart),
				hourEnd: convertHourStringToMinutes(hourEnd),
				useVoiceChannel
			}
		});

		return ad;
	}
}

export { CreateAdService };
