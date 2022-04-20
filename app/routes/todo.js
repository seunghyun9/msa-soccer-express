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

// const { todowrite, todolist } = require('../controllers/todo.controller');
// module.exports = x => {
//     x.app.post(`${x.url}/todo-write`, todowrite);
//     x.app.get(`${x.url}/todo-list`, todolist)
// }