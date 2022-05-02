const moment = require('moment');
const connection = require('../database/connection');

class Task {
    //add task method
    addTask(tasks, res) {
        //formatting date to brasil pattern
        const date = moment(tasks.date, 'DD/MM/YYYY').format(
            'YYYY-MM-DD HH:mm:ss'
        );

        const validDate = moment(date).isAfter(moment());
        const validDescription = tasks.description.length > 5;

        const validation = [
            {
                title: 'Date',
                isValid: validDate,
                message: 'This should be a future date',
            },
            {
                title: 'Description',
                isValid: validDescription,
                message: 'Description must have at least 5 characters',
            },
        ];

        //catch only incorrect fields
        const errors = validation.filter((field) => !field.isValid);
        const errorsExist = errors.length;

        if (errorsExist) {
            res.status(404).json(errors);
        } else {
            const tasksDate = { ...tasks, date };
            const sql = `INSERT INTO Tasks SET ?`;

            connection.query(sql, tasksDate, (err, results) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    res.status(201).json(results);
                }
            });
        }
    }
    //end of add tasks method

    //list tasks method
    listTasks(res) {
        const sql = 'SELECT * FROM Tasks';

        connection.query(sql, (err, results) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json(results);
            }
        });
    }
}

module.exports = new Task();