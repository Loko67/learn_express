const { UserModel } = require("../models/User.model")

async function updateUser(req) {

  await UserModel.updateOne(
    { id: req.params.id },
    {
      $set:
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }
    })

}

module.exports = { updateUser }