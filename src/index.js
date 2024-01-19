import express from "express"
import dotenv from 'dotenv'
import connectDB from "./db/db.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3001



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})