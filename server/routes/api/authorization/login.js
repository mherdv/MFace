const Users = require('../../../models/User');
module.exports = (req, res) => {

    //  todo return token jwt 
    const { email, password } = req.body;

    Users.findOne({ email }).then(user => {
        if (user.password != password) throw new Error({});
        res.send('login')
    }).catch(err => {
        res.send("wrong email or password ")
    })

}