
const jwt = require('jsonwebtoken');
const secretKey = require('../../../config/keys').JWTSECRETKEY;

function checkTokenValidation(token) {
    if (!token) return false;

    try {
        jwt.verify(token, secretKey, function (err, decoded) {

            if (err) { throw { status: 0 } }

            throw { status: 1, decodedToken: decoded }
        });

    } catch (result) {
        if (!result.status) return false;
        return result;

    }
}
function authorizeMiddleWear(req, res, next) {

    // todo find alternative way for this action 

    const isAuthorization = req.originalUrl.split('/')[2] == 'authorization';
    if (isAuthorization) {
        next();
        return
    }
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.send('loginFirst')
        return;
    }
    // checking token  checking if token is valid 
    const validatedToken = checkTokenValidation(token);

    if (validatedToken) {
        req.user = validatedToken;
        next();
        return;
    }
    res.send('login first ')
}

module.exports = authorizeMiddleWear;