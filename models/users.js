const moment = require('moment');
const connection = require('../database/connection');

class User {
    add(users, res) {
        const birthDate = moment(users.birthDate, 'DD/MM/YYYY').format(
            'YYYY-MM-DD'
        );

        const birthdayDate = { ...users, birthDate };
        const sql = `INSERT INTO Users SET ?`;

        connection.query(sql, birthdayDate, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    }
}

module.exports = new User();
