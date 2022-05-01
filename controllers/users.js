//exporting person function
const User = require('../models/users');
module.exports = (app) => {
    //GET
    app.get('/api/v1/user', (req, res) => res.send('users route making a GET'));

    //POST
    app.post('/api/v1/user', (req, res) => {
        const user = req.body;
        User.add(user, res);
    });
};
