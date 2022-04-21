import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import UserService from '../services/userService.js'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function (_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
app.post('/join', cors(corsOptions), (req, res) => {
    new UserService().join(req, res)
})
app.post('/login', cors(corsOptions), (req, res, next) => {
    new UserService().login(req, res)
    next()
})

export default app
// const { signup, userlist,profile,login } = require('../controllers/user.controller');
// const { verifyToken } = require('./middleware');
// module.exports = x => {
//     x.app.post(`${x.url}/signup`, signup) ;
//     x.app.post(`${x.url}/login`,verifyToken,login); // 로그인은 포스트 형식이여야한다. (보안때문)
//     x.app.get(`${x.url}/user-list`, userlist) ;
//     x.app.get(`${x.url}/profile/:id`, profile);
// }

