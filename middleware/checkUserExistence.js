const { UserModel } = require("../models/User.model")

async function checkUserExists(req, res, next) {
  try {
    const user = await UserModel.findOne({ id: req.params.id })

    if (user) {
      req.user = user
      next()
      
    } else {
      res.status(404).send(`Пользователя с id ${req.params.id} не существует`)
    }
  } catch (error) {
    res.status(500).send("Ошибка сервера")
  }
}

module.exports = checkUserExists