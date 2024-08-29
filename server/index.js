import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

import {getHealth} from "./controllers/health.js"
import {postSignup ,postLogin} from "./controllers/auth.js"


const app = express()
app.use(express.json());
app.use(cors());

const dbconnection = async ()=>{

    const conn = mongoose.connect(process.env.MONGO_URL);
    if (conn){
        console.log(`mongoDB is connected ✔ `)
    }
} 

dbconnection();


app.get("/health",getHealth)

app.post("/signup",postSignup)
app.post("/login",postLogin)
  


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})