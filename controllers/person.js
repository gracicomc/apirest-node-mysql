//exporting person function
module.exports = (app) => {
    app.get('/person', (req, res) => res.send('persons route making a GET'));

    app.post('/person', (req, res) => {
        console.log(req.body);
        res.send('persons route making a POST');
    });
};
