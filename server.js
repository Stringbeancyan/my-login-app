// server.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db'); // Initialize the database connection
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
}));

// Admin route
app.get('/admin', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'admin') {
        return res.status(403).send('Access denied');
    }
    // Fetch all users (or other data) for the admin view
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        res.render('admin', { data: rows });
    });
});

app.use('/', authRoutes); // Use the authentication routes

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
