//exporting person function
const User = require('../models/users');
module.exports = (app) => {
    //GET
    app.get('/api/v1/user', (req, res) => {
        User.list(res);
    });

    //GET by ID
    app.get('/api/v1/user/:id', (req, res) => {
        console.log(req.params);
        res.send('ok');
    });

    //POST
    app.post('/api/v1/user', (req, res) => {
        const user = req.body;
        User.add(user, res);
    });
};
