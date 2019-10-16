const Users = require('../../../models/User');

module.exports = (req, res) => {
    const { name, age, surname, email, dateOfBirthday, gender, password } = req.body;



    const newUser = new Users({ name, age, surname, email, dateOfBirthday, gender, password })
    newUser.save()
        .then((data) => {
            res.send({ status: 200, user: data })
        }).catch(({ errors }) => {
            res.send({ status: 409, error: errors })
        })

}