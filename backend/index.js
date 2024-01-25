/* eslint-disable no-undef */
import { configDotenv } from 'dotenv';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose'
import { router } from './routes/Router.js';
configDotenv();
const PORT = process.env.PORT || 3000

const app = express();
app.use(cors({origin: "http://localhost:5173"}))
app.use(cors({origin:"https://crude-ogaraga.vercel.app/"}))
app.use(express.json());
app.use('/', router);
mongoose.connect(process.env.Base_URL).then(()=>console.log('connection to database granted')).catch(()=>console.error('Conection to database denied'));

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));










