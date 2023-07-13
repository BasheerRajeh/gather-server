const { authSignin } = require("../controllers/authController");
const { userCreate, userGetMe } = require("../controllers/userController");
const upload = require("../middleware/upload");
const auth = require("./../middleware/auth");

const router = require("express").Router();

router.post("/signup", upload.single("picturePath"), userCreate);
router.post("/signin", authSignin);
router.get("/profile", auth, userGetMe);

module.exports = router;
