const { UserModel } = require("../models/User.model")

async function checkCorrectUser(req, res, next) {

  const { firstName, lastName, id } = req.body
  const newUser = await UserModel.findOne({ id: req.body.id })

  if (!firstName || !lastName || !id || newUser) {
    return res.status(400).send(`Переданы не все поля для создания пользователя или пользователь с id ${req.body.id} уже существует`)
  }
  next()
}

module.exports = { checkCorrectUser }