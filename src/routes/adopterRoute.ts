// adotanteRouter.ts
import express from "express";
import { AppDataSource } from "../config/dataSource";
import AdopterController from "../controller/AdopterController";
import AdopterRepository from "../repositories/adopterRepository";

const router = express.Router();
const adoptetRepository = new AdopterRepository(
  AppDataSource.getRepository("AdopterEntity")
);
const adopterController = new AdopterController(adoptetRepository);

router.post("/", (req, res) => adopterController.createAdopter(req, res));

export default router;
