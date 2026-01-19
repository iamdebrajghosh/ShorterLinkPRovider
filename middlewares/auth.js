const { getUser } = require('../service/auth');

function checkFroAuthentication(req, res, next) {
    const tokenCookie = req.cookies['sessionToken'];
    req.user = null;
    if (!tokenCookie) {
        return next();
    }
    const token = tokenCookie;
    const user = getUser(token);
    req.user = user;
    return next();
}

function restrictToLoggedinUserOnly(roles) {
    return function (req, res, next) {
        if (!req.user) {
            return res.redirect('/login');
        }
        if (roles && !roles.includes(req.user.role)) {
            return res.end('You do not have permission to access this resource.');
        }
        return next();
    };
}

module.exports = {
    checkFroAuthentication,
    restrictToLoggedinUserOnly
};