const { todowrite, todolist } = require('../controllers/todo.controller');
module.exports = x => {
    x.app.post(`${x.url}/todo-write`, todowrite);
    x.app.get(`${x.url}/todo-list`, todolist)
}