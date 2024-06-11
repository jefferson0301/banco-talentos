import express from "express";
import {getPoliciais, getQueryPoliciaisFormado, addPolicial, deletePolicial, editPolicial, getQueryPoliciais, getQueryPoliciaisTalento} from "../controllers/policial.js"



const router = express.Router()

router.get("/", getPoliciais)

router.get("/query/?:talento&:formado", getQueryPoliciais)

router.get("/query/:talento", getQueryPoliciaisTalento) 

router.get("/queryformado/:formado", getQueryPoliciaisFormado)

router.post("/", addPolicial)



router.delete("/:id", deletePolicial)

router.put("/:id", editPolicial)


export default router