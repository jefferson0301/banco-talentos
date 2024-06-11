import express from "express"
import policiaisRouter from "./routes/policiais.js"
import talentosRouter from "./routes/talentos.js"
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())

app.use("/", policiaisRouter)
app.use("/", talentosRouter)

app.listen(8803)
