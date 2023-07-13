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

module.exports = router;
