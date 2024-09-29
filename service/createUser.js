const { UserModel } = require("../models/User.model")

async function createUser(req) {

  await UserModel.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      id: req.body.id
    }
  )

}

module.exports = { createUser }