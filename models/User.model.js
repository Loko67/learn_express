const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    id: Number
  }
)

const UserModel = mongoose.model("users", UserSchema)

module.exports = { UserModel }