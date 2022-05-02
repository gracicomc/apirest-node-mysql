const Task = require('../models/tasks');
module.exports = (app) => {
    //POST
    app.post('/api/v1/task', (req, res) => {
        const task = req.body;

        Task.addTask(task, res);
    });
    //GET
    app.get('/api/v1/task', (req, res) => {
        Task.listTasks(res);
    });
};
