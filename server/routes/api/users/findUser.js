const User = require('../../../models/User');

module.exports = async (req, res) => {
    const { fullName } = req.body;
    await User.find({ "name": new RegExp(fullName) }).limit(3).then(users => {
        res.send({ users });
    })
}
