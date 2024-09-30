const { UserModel } = require("../models/User.model")

const { body, validationResult } = require('express-validator')

const validateUser = [
  body("firstName")
    .notEmpty()
    .withMessage("Имя не должно быть пустым"),

  body("lastName")
    .notEmpty()
    .withMessage("Фамилия не должна быть пустой"),

  body("id")
    .isInt()
    .withMessage("ID должен быть числом")
    .notEmpty()
    .withMessage("ID не должен быть пустым"),

  (req, res, next) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array().map((error) => error.msg))
    }
    next()
  }
]

async function checkIdUser(req, res, next) {

  const newUser = await UserModel.findOne({ id: req.body.id })

  if (newUser) {
    return res.status(400).send(`Пользователь с id ${req.body.id} уже существует`)
  }
  next()
}

module.exports = {
  checkIdUser,
  validateUser
}