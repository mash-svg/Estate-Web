// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
import path from 'path';
// const userRouter = require("./routes/user.route.js")
// const authRouter = require("./routes/auth.route.js")
// const listingRouter = require("./routes/listing.route.js");
// const path = require('path');
import cors from 'cors';


// const  cookieParser =require('cookie-parser');
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongoDB ✅");
}).catch((err)=>{
    console.log("mongoDB is not connected ❌ ",err);
});



const __dirname = path.resolve();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server is running");
})






app.use(cors());

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listings',listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','dist','index.html'));
} )

// app.use(express.static(path.join(__dirname, '/client/dist')));


//  app.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
//  })


 //Serve static files from React frontend
//  app.use(express.static(path.join(__dirname, 'client', 'dist')));

// // Catch-all handler: send back React’s index.html file
// app.get('/*', (req, res) => {
//    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
//  });





app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
