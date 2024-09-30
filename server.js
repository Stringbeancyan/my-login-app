const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware setup
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));

// Routes
app.use('/', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
