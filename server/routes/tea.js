import express from "express";
import teaController from "../controllers/tea.js";

// heyyyyyyyyyyyyyyy

const router = express.Router();

router.post("/tea", teaController.newTea);

export default router;
