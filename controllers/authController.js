const bcrypt = require('bcrypt');
const { users } = require('../config/db');

const login = async (username, password) => {
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password_hash)) {
        return user; // Return user if authenticated
    }
    return null; // Invalid credentials
};

module.exports = { login };
