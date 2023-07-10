const { userGet, userGetAll, userGetAllFriends } = require("../controllers/userController");

const router = require("express").Router();

router.get("/", userGetAll);
router.get("/:id", userGet);
router.get('/:id/friends', userGetAllFriends)

module.exports = router;
