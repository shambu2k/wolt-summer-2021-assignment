import express from "express";
import { validateCoordinates } from "../utils/ValidateCoordinates";
import { discoverController } from "../controllers/DiscoveryController";

const discoverRouter = express.Router();

discoverRouter.get("/discovery", validateCoordinates, discoverController);

export = discoverRouter;
