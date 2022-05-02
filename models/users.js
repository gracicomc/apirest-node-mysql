const moment = require('moment');
const connection = require('../database/connection');

class User {
    //add user method
    add(users, res) {
        //formatting date to brasil pattern
        const birthDate = moment(users.birthDate, 'DD/MM/YYYY').format(
            'YYYY-MM-DD'
        );
        //fields validation
        const birthDateIsValid = moment().diff(birthDate, 'years', false) >= 18;
        //strong password: between 6-20 characters and at least 1 special character, number and letter
        const passwordIsValid =
            /^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!#$%^&*()/\\a-zA-Z0-9]{6,20}$/.test(
                users.password
            );
        const emailIsValid =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(
                users.email
            );
        const cpfIsValid = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(
            users.cpf
        );
        const nameIsValid = users.name.length > 2;
        const addressIsValid = users.address.length > 5;
        const numberIsValid = users.number.length > 1;
        const complementIsValid = users.complement.length > 0;
        const cityIsValid = users.city.length > 2;
        const stateIsValid = users.state.length == 2;
        const countryIsValid = users.country.length > 3;
        const zipCodeIsValid = /[0-9]{5}[\d]{3}/.test(users.zipCode);

        const validation = [
            {
                title: 'birthDate',
                isValid: birthDateIsValid,
                message: 'User must have at least 18 years',
            },
            {
                title: 'Password',
                isValid: passwordIsValid,
                message:
                    'Your password must have: 6 characters and at least: a special character, a number, an upper and a lower case',
            },
            {
                title: 'Email',
                isValid: emailIsValid,
                message: 'invalid email, try another',
            },
            {
                title: 'CPF',
                isValid: cpfIsValid,
                message: 'Invalid CPF, try another',
            },
            {
                title: 'name',
                isValid: nameIsValid,
                message: 'Your name must have at least 3 characters',
            },
            {
                title: 'address',
                isValid: addressIsValid,
                message: 'Too short. Address must have at least 6 characters',
            },
            {
                title: 'number',
                isValid: numberIsValid,
                message: 'Short number, try another',
            },
            {
                title: 'Complement',
                isValid: complementIsValid,
                message: 'This field is empty',
            },
            {
                title: 'City',
                isValid: cityIsValid,
                message: 'City name is too short',
            },
            {
                title: 'State',
                isValid: stateIsValid,
                message: 'Invalid state. Use just acronyms',
            },
            {
                title: 'Country',
                isValid: countryIsValid,
                message: 'Country name is too short',
            },
            {
                title: 'Zipcode',
                isValid: zipCodeIsValid,
                message: 'Invalid zipcode, try another',
            },
        ];

        //catch only incorrect fields
        const errors = validation.filter((field) => !field.isValid);
        const errorsExist = errors.length;

        if (errorsExist) {
            res.status(404).json(errors);
        } else {
            const birthdayDate = { ...users, birthDate };
            const sql = `INSERT INTO Users SET ?`;

            connection.query(sql, birthdayDate, (err, results) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    res.status(201).json(results);
                }
            });
        }
    }
    //end of add user method

    //list users method
    list(res) {
        const sql = 'SELECT * FROM Users';

        connection.query(sql, (err, results) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(results);
            }
        });
    }
    //end of list user method

    //list user by ID method
    listById(id, res) {
        const sql = `SELECT * FROM Users WHERE id=${id}`;

        connection.query(sql, (err, results) => {
            if (erro) {
                res.status(400).json(err);
            } else {
                res.status(200).json(results);
            }
        });
    }
}

module.exports = new User();
