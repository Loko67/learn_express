const { UserModel } = require("../models/User.model")

async function get(req, res) {

  try {
    res.send(req.user.firstName)

  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка сервера")
  }
}

async function del(req, res) {

  try {
    await UserModel.deleteOne({ id: req.params.id })

    res.status(200).send("Пользователь удален")

  } catch (error) {
    console.error(error)
    res.status(500).send("Ошибка сервера")
  }
}

async function post(req, res) {

  try {
    const newUser = req.body
    await UserModel.create(
      {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        id: newUser.id
      }
    )

    res.status(200).send("Пользователь добавлен")

  } catch (error) {
    console.error(error)
    res.status(500).send("Ошибка сервера")
  }
}

module.exports = {
  get,
  post,
  del
}