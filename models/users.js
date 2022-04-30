const connection = require('../database/connection');

class User {
    add(users) {
        const sql = `INSERT INTO Users SET ?`;

        connection.query(sql, users, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
    }
}

module.exports = new User();
