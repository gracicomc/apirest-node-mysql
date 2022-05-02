//exporting person function
const User = require('../models/users');
module.exports = (app) => {
    //POST
    app.post('/api/v1/user', (req, res) => {
        const user = req.body;

        User.addUser(user, res);
    });

    //GET
    app.get('/api/v1/user', (req, res) => {
        User.listUser(res);
    });

    //GET by ID
    app.get('/api/v1/user/:id', (req, res) => {
        const id = parseInt(req.params.id);

        User.listById(id, res);
    });

    //PATCH
    app.patch('/api/v1/user/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        User.updateUserPatch(id, values, res);
    });

    app.put('/api/v1/user/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        User.updateUserPut(id, values, res);
    });

    //DELETE
    app.delete('/api/v1/user/:id', (req, res) => {
        const id = parseInt(req.params.id);

        User.deleteUser(id, res);
    });
};
