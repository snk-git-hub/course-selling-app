// Add route skeleton for user login, signup, purchase a course, see course
require('dotenv').config()

const express = require("express");
const bodyParser =require("body-parser");
const cors =require("cors");
const app=express();
const{ userRouter } =require("./routes/user")
const course =require("./routes/course")
const  admin =require ("./routes/admin")
console.log(process.env.MONGO_URL);
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
console.log("JWT_SECRET from .env:", process.env.JWT_SECRET); 
const connectDB = require("./config");

connectDB();
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/auth",userRouter);
//app.course("/api/auth",course);
//app.admin("/api/auth",admin);
const PORT= 5000; //const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

