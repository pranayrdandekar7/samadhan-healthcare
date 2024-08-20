import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


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




const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})