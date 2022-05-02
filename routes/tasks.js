module.exports = (app) => {
    //GET
    app.get('/api/v1/task', (req, res) => res.send('tasks route making a GET'));

    //GET by ID
    app.get('/api/v1/task/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Users.readById(id, res);
    });

    //POST
    app.post('/api/v1/task', (req, res) => {
        const task = req.body;
        Task.add(task);
        res.send('tasks route making a POST');
    });
};
