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
    //GET by ID
    app.get('/api/v1/task/:id', (req, res) => {
        const id = Number(req.params['id']);

        Task.listById(id, res);
    });

    //PUT
    app.put('/api/v1/task/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        Task.updateTaskPut(id, values, res);
    });
};
