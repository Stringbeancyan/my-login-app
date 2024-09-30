// Database configuration file (using a simple array for demo purposes)
const users = [
    {
        id: 1,
        username: 'Stryngbean_cyan',
        password_hash: '$2y$10$your_hashed_password_here', // Replace with actual hashed password
        is_admin: true
    },
    {
        id: 2,
        username: 'Stryngbeancyan',
        password_hash: '$2y$10$another_hashed_password_here', // Another user
        is_admin: false
    }
];

module.exports = { users };

