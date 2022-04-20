import dotenv from 'dotenv' 
import mongoose from 'mongoose'
import UserModel from './userModel.js'
import TodoModel from './todoModel.js'
import BoardModel from './boardModel.js'
mongoose.Promise = global.Promise // 옵저버 패턴으로 몽구스에게 전역을 쓸 수 있는 권한을 준 것 

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.user = UserModel(mongoose)
db.todo = TodoModel(mongoose)
db.board = BoardModel(mongoose)
export default db