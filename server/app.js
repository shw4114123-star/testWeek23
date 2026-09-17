import express from "express"
import cors from "cors"
import "dotenv/config"
import "./db/db.js"
import routers from "./routes/routes.js"
import { errorHandle } from "./service/errorHadler.js"

const app = express()
const PORT = process.env.PORT


app.use(express.json())
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))

app.use("/", routers)


app.use(errorHandle)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})