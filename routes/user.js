const express = require("express")
const router = express.Router()

const { checkUserExists } = require("../middleware/checkUserExistence")
const { checkIdUser, validateUser } = require("../middleware/checkCorrectUser")

const userController = require("../controllers/userController")

router.get("/:id", checkUserExists, userController.get)
router.post("/", validateUser, checkIdUser, userController.post)
router.delete("/:id", checkUserExists, userController.del)
router.get("/", userController.getAll)
router.put("/:id", checkUserExists, userController.put)

module.exports = { router }