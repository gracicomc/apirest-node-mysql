//server
const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection');

connection.connect((erro) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('successfully connected');
        const app = customExpress();
        app.listen(3000, () => console.log('launch server on 3000 port'));
    }
});
