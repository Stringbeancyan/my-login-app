const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)");

  // Insert admin user
  db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['Stryngbean_cyan', 'nathaniel2010']);
});

module.exports = db;
