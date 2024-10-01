const db = require('../config/db');

// Login controller
exports.login = (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, user) => {
        if (err) {
            return res.status(500).send('An error occurred');
        }

        if (user) {
            if (username === 'Stryngbean_cyan') {
                return res.redirect('/admin');
            } else {
                return res.send('Login successful!');
            }
        } else {
            return res.status(401).send('Invalid credentials');
        }
    });
};

// Register controller
exports.register = (req, res) => {
    const { username, password } = req.body;

    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
        if (err) {
            return res.status(400).send('Registration failed. Username might be taken.');
        }
        res.send('Registration successful!');
    });
};
