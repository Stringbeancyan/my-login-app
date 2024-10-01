const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      return res.status(500).send('Database error');
    }

    if (!row) {
      return res.status(400).send('Invalid credentials');
    }

    // If the admin logs in
    if (username === 'Stryngbean_cyan' && password === 'nathaniel2010') {
      // Redirect to admin panel hosted on Vercel
      return res.redirect('https://your-admin-vercel-app-url.vercel.app');
    }

    // For normal users
    res.send('Login successful!');
  });
});

module.exports = router;
