//exporting person function
const User = require('../models/users');
module.exports = (app) => {
    app.get('/user', (req, res) => res.send('users route making a GET'));

    app.post('/user', (req, res) => {
        const user = req.body;
        User.add(user);
        res.send('users route making a POST');
    });
};
