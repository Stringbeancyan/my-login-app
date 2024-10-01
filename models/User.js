// models/User.js
const db = require('../config/db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);

    // Insert admin user if it doesn't exist
    const insert = db.prepare(`INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)`);
    insert.run('Stringbean_cyan', 'nathaniel2010');
    insert.finalize();
});
