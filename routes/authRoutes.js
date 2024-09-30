const express = require('express');
const { login } = require('../controllers/authController');
const { isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await login(username, password);

    if (user) {
        req.session.user = user; // Set user session
        res.redirect('/admin/dashboard'); // Redirect to admin dashboard
    } else {
        res.send('Invalid credentials');
    }
});

// Admin dashboard route
router.get('/admin/dashboard', isAdmin, (req, res) => {
    res.render('adminDashboard', { user: req.session.user }); // Render admin dashboard view
});

// Login view route
router.get('/login', (req, res) => {
    res.render('login'); // Render login view
});

module.exports = router;
