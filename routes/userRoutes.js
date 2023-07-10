const { userGet, userGetAll } = require("../controllers/userController");

const router = require("express").Router();

router.get("/", userGetAll);
router.get("/:id", userGet);


module.exports = router;
