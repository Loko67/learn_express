const { UserModel } = require("../models/User.model")

const { prepareUser } = require("../service/prepareUser")

async function get(req, res) {

  try {
    res.send(prepareUser(req.user))

  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка сервера")
  }
}

async function getAll(req, res) {

  try {

    const users = []

    for (const user of await UserModel.find()) {
      users.push(prepareUser(user))
    }

    res.send(users)

  } catch (error) {
    console.error(error)
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

async function put(req, res) {

  try {

    await UserModel.updateOne(
      { id: req.params.id },
      {
        $set:
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName
        }
      })

    res.status(500).send("Данные обновлены")

  } catch (error) {

    console.error(error)
    res.status(500).send("Ошибка сервера")

  }
}

module.exports = {
  get,
  post,
  del,
  getAll,
  put
}