const express = require('express');
const app = express();

//port
app.listen(3000, () => console.log('launch server on 3000 port'));

//first GET endpoint
app.get('/person', (req, res) => res.send('persons route'));
