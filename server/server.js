import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration,OpenAIApi } from "openai";

dotenv.config();

const configuration=new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});


const openai=new OpenAIApi(configuration);

const app=express();
app.use(cors());
app.use(express.json());







app.listen(5000,()=>console.log('AI server started on http://localhost:5000'));