//server
const customExpress = require('./config/customExpress');

const app = customExpress();
app.listen(3000, () => console.log('launch server on 3000 port'));
