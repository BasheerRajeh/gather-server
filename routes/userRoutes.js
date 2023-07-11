const {
    userGet,
    userGetAll,
    userGetAllFriends,
    userCreate,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/", userGetAll);
router.get("/:id", userGet);
router.get("/:id/friends", userGetAllFriends);
router.post("/", userCreate);

module.exports = router;
