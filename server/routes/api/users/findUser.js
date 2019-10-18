const User = require('../../../models/User');

module.exports = async (req, res) => {
    // todo add ability to lazy scroll searching 
    const { fullName } = req.body;
    await User.find({ "name": new RegExp(fullName) }).limit(40).then(users => {
        res.send({ users });
    });
}
