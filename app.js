const express = require("express")
const app = express()
const userRouter = require("./routes/user")

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

app.use("/user", userRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log("Hello!")
})