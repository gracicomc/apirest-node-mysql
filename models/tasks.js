const moment = require('moment');
const connection = require('../database/connection');

class Task {
    //add task method
    addTask(tasks, res) {
        //formatting date to brasil pattern
        const date = moment(tasks.date, 'DD/MM/YYYY HH:mm:ss').format(
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
    //list task by ID method
    listById(id, res) {
        const sql = `SELECT tasks.*, users.id FROM tasks JOIN users on tasks.user = users.id WHERE user=${id}`;

        connection.query(sql, (err, results) => {
            if (err) {
                res.status(400).json(err);
            } else {
                const task = results[0];
                res.status(200).json(task);
            }
        });
    } //End of list task by ID method

    //update methods
    //PUT
    updateTaskPut(id, values, res) {
        if (values.date) {
            values.date = moment(values.date, 'DD/MM/YYYY HH:mm:ss').format(
                'YYYY-MM-DD'
            );
        }

        const sql = 'UPDATE Tasks SET ? WHERE user=?';

        connection.query(sql, [values, id], (err, results) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(201).json({ ...values, id });
            }
        });
    }
}

module.exports = new Task();
