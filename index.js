import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./route/ProductRoute.js"
import customerRoute from "./route/CustomerRoute.js"

dotenv.config();

//import 
const app = express()
//middlewares
app.use(express.json()); 

app.get("/basic",async(req,res)=>{
          res.send("hello world")
})

app.use("/product",productRoute)
app.use("/customer",customerRoute)


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})

//connection to server
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

export default app;

