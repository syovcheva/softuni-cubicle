
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {

    // first authenticate by checking for cookies
    const token = req.cookies['auth'];

    if (token) {
        // validate token - if invalid, should be in try...catch block since it's async
        // if sync function => return error
        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;

            next();
        } catch (err) {
            res.clearCookie('auth')
            res.redirect('/users/login');
        }
    } else {

        // else if no token => not logged in, move to next
        next();
    }

}