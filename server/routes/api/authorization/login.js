const Users = require('../../../models/User');
const jwt = require('jsonwebtoken');
const secretKey = require('../../../../config/keys').JWTSECRETKEY;


module.exports = (req, res) => {
    const { email, password } = req.body;

    Users.findOne({ email }).then(user => {
        if (user.password != password) throw new Error({});

        const { name, id } = user;
        const token = jwt.sign({
            name, id, email
        }, secretKey, { expiresIn: '1d' });

        res.send({ status: 1, user, token });
    }).catch(err => {

        res.send({ status: 0, errorText: "wrong email or password " });
    })

}