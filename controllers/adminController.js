const db = require('../config/db');

// Get all users for admin
exports.getUsers = (req, res) => {
    db.all('SELECT * FROM users', [], (err, users) => {
        if (err) {
            return res.status(500).send('An error occurred');
        }
        res.json(users);
    });
};
