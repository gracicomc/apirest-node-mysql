//exporting person function
module.exports = (app) => {
    app.get('/person', (req, res) => res.send('persons route'));
};
