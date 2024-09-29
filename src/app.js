const express = require("express")
const app = express()
const { router } = require("../routes/user")

const mongoose = require("mongoose")

require('dotenv').config()

const options = { dbName: "express" }

mongoose.connect(process.env.MONGO_HOST, options)
  .then(() => console.log("Подключено к MongoDB"))
  .catch(error => {
    console.error(`Ошибка подключения к MongoDB: ${error}`)
    process.exit(1)
  })

app.use(express.json())

app.use("/user", router)

app.use("/", router)

app.listen(process.env.PORT || 3000, () => {
  console.log("Hello!")
})