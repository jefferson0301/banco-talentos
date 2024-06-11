import express from "express";
import { addTalento, removeTalento, updateTalento } from "../controllers/talento.js";

const router = express.Router()

router.post("/talento/:idPolicial", addTalento)

router.delete("/talento/:idTalento", removeTalento)

router.put("/talento/:idTalento", updateTalento)

export default router