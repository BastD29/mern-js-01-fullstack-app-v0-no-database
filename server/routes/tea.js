import express from "express";
import teaController from "../controllers/tea.js";

const router = express.Router();

router.get("/tea", teaController.getAllTea);
router.post("/tea", teaController.newTea);
router.delete("/tea", teaController.deleteAllTea);

router.get("/tea/:name", teaController.getOneTea);
router.post("/tea/:name", teaController.newComment);
router.delete("/tea/:name", teaController.deleteOneTea);

export default router;
