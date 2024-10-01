const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Database setup
const db = new sqlite3.Database('./users.db');

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Import routes
const adminRoute = require('./routes/admin');

// Use routes
app.use('/', adminRoute);

// Serve login page
app.get('/', (req, res) => {
    res.render('login');
});

// Handle login
app.post('/login', (req, res) => {
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
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
