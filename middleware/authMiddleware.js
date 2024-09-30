const isAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.is_admin) {
        return next(); // Proceed if admin
    }
    res.status(403).send('Access denied'); // Deny access
};

module.exports = { isAdmin };
