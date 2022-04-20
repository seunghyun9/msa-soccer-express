import express from "express"
import cors from 'cors'
//import admin from "./admin.js"
//import basic from "./basic.js"
//import board from "./board.js"
//import game from "./game.js"
//import user from "./user.js"
//import timeRouter from './app/routes/time.js'
//import tokenRouter from './app/routes/token.js';
//import todoController from './app/controllers/todoController.js'
//import userController from './app/controllers/userController.js'

const corsOptions = { 
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  }
const app = express()
app.use(cors());
app.get('/now',cors(corsOptions),(_req, res)=>{
    res.json({"now":new Date().toLocaleString()})
})
/**
app.use("/admin", admin)
app.use("/basic", basic)
app.use("/board", board)
app.use("/game", game)
app.use("/todo", todo)
app.use("/user", user) */

export default app