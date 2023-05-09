import express from "express";
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
//const mongoconnectionurl = 'mongodb://127.0.0.1:21017/project';
mongoose.connect(process.env.mongoconnectionur);
//mongoose.connect('mongodb://127.0.0.1:27017/project');


const app = express();
//const PORT = 7000;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.listen(process.env.port,() => {
    console.log(`started the application on http://localhost:${process.env.port}`);
});