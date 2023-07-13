const router = require("express").Router();
const {
    postGetAll,
} = require("../controllers/postController");
const auth = require("../middleware/auth");

router.get("/", auth, postGetAll);

module.exports = router;
