const db = require('../config/db');

exports.login = (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      return res.status(500).send('Database error');
    }

    if (!row) {
      return res.status(401).send('Login failed!');
    }

    // Redirect to admin panel if admin
    if (username === 'Stryngbean_cyan' && password === 'nathaniel2010') {
      return res.redirect('https://admin-panel-app.vercel.app/');
    } else {
      return res.send('Login successful!');
    }
  });
};
