import express from "express";
import dotenv from "dotenv"
import { sendEmail } from "./controllers/EmailSender.controllers.js";
dotenv.config()
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST'],
        credentials: true
    }
))

app.get("/", (req, res) => {
    res.send("hyy")
})
app.post("/user/send-email", sendEmail)

app.listen(process.env.PORT, () => {
    console.log(`Server started: http://localhost:${process.env.PORT}`);
})