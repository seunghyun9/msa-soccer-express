const db = require('../models/index')
const TodoSchema = db.todo
exports.todowrite= (req, res)=>{
    new TodoSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })  
}
exports.todolist = (req, res) => {
    console.log(`### todoController access `)
    TodoSchema.find()
    .exec((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, users })
    })
    
}