const User = require("../../../models/User");

module.exports = async (req, res) => {
  // TODO: add ability to lazy scroll searching
  // TODO: add ability to show more users
  const { fullName } = req.body;
  await User.find({ fullName: new RegExp(fullName) })

    .select("-password -dateOfBirthday -name -surname")
    .limit(40)
    .then(users => {
      res.send({ users });
    })
    .catch(err => {
      res.send(err);
    });
};
