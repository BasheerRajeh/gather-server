const { authSignin } = require("../controllers/authController");
const { userCreate, userGetMe } = require("../controllers/userController");
const auth = require("./../middleware/auth");

const router = require("express").Router();

router.post("/signup", userCreate);
router.post('/signin', authSignin)

module.exports = router;