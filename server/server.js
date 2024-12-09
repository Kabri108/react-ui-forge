import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from "./Config/dbConfig.js";
import componentRouter from './Routes/ComponentRoutes.js'



dotenv.config()
const app=express()

app.use(cors())
connectDB()

app.get('/',(req,res)=>{
    res.send("Api is running")
})

app.use("/api/components",componentRouter)

app.listen(5000, () => {
    console.log(`Server is running at http://localhost:5000`);
  });