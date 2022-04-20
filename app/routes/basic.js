import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());




// const { getBmi, getCalc } = require('../controllers/basic.controller');
// module.exports = x => {x.app.post(`${x.url}/bmi`, getBmi)
//                        x.app.post(`${x.url}/calc`, getCalc)}