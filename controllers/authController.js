// controllers/authController.js
const db = require('../config/db');

exports.login = (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            return res.status(500).send('Database error');
        }
        if (row) {
            req.session.user = { username: row.username, role: 'admin' };
            return res.redirect('/admin'); // Redirect to admin page
        }
        res.status(401).send('Invalid credentials');
    });
};

