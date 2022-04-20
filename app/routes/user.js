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
// const { signup, userlist,profile,login } = require('../controllers/user.controller');
// const { verifyToken } = require('./middleware');
// module.exports = x => {
//     x.app.post(`${x.url}/signup`, signup) ;
//     x.app.post(`${x.url}/login`,verifyToken,login); // 로그인은 포스트 형식이여야한다. (보안때문)
//     x.app.get(`${x.url}/user-list`, userlist) ;
//     x.app.get(`${x.url}/profile/:id`, profile);
// }

