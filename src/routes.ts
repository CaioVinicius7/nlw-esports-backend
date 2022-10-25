import { Router } from "express";

import { CreateAdController } from "./modules/ads/controllers/CreateAdController";
import { GetDiscordByAdController } from "./modules/ads/controllers/GetDiscordByAdController";
import { ListAdsByGameController } from "./modules/ads/controllers/ListAdsByGameController";

import { GetAllGamesController } from "./modules/games/controllers/GetAllGamesController";

const createAdController = new CreateAdController();

const getAllGamesController = new GetAllGamesController();
const listAdsByGameController = new ListAdsByGameController();
const getDiscordByAdController = new GetDiscordByAdController();

const router = Router();

router.get("/games", getAllGamesController.handle);
router.get("/games/:id/ads", listAdsByGameController.handle);
router.post("/games/:id/ads", createAdController.handle);
router.get("/ads/:id/discord", getDiscordByAdController.handle);

export { router };
