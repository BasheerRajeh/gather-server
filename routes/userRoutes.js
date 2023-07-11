const {
    userGet,
    userGetAll,
    userGetAllFriends,
    userGetMe,
} = require("../controllers/userController");
const auth = require("./../middleware/auth");
const router = require("express").Router();

router.get("/", auth, userGetAll);
router.get("/:id", auth, userGet);
router.get("/:id/friends", auth, userGetAllFriends);
router.get("/profile", auth, userGetMe);

module.exports = router;
