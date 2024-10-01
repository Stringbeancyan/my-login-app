const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the users database.');
});

// Create users table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
    
    // Insert the admin user if it doesn't exist
    db.get('SELECT * FROM users WHERE username = ?', ['Stryngbean_cyan'], (err, row) => {
        if (!row) {
            db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['Stryngbean_cyan', 'nathaniel2010']);
        }
    });
});

module.exports = db;
