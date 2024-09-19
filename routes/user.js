const express = require("express")
const router= express.Router()

const checkUserExists = require("../middleware/checkUserExistence")
const checkCorrectUser = require("../middleware/checkCorrectUser")

const userController = require("../controllers/userController")

router.get("/:id", checkUserExists, userController.get)
router.post("/", checkCorrectUser, userController.post)
router.delete("/:id", checkUserExists, userController.del)

module.exports = router