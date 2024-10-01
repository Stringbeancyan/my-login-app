const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Admin panel route
router.get('/admin', authMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin.html'));
});

// API to get all users
router.get('/api/users', adminController.getUsers);

module.exports = router;
