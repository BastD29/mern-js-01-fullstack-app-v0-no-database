import express from "express";
import teaController from "../controllers/tea.js";

const router = express.Router();

router.post("/tea", teaController.newTea);

export default router;
