//exporting person function
const User = require('../models/users');
module.exports = (app) => {
    //GET
    app.get('/api/v1/user', (req, res) => {
        User.list(res);
    });

    //GET by ID
    app.get('/api/v1/user/:id', (req, res) => {
        const id = parseInt(req.params.id);

        User.listById(id, res);
    });

    //PUT
    app.patch('/api/v1/user/', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
    });

    //POST
    app.post('/api/v1/user', (req, res) => {
        const user = req.body;

        User.add(user, res);
    });
};
