module.exports = (req, res, next) => {
    if (req.body.username === 'Stryngbean_cyan') {
        next(); // Proceed to the next middleware
    } else {
        res.status(403).send('Access denied.');
    }
};
