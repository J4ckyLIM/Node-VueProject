const router = require("express").Router()
const controller = require("./controller")

router.post('/new', controller.addUser)
router.post('/login', controller.loginUser)

module.exports = router;