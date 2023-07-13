const multer = require("multer");
const config = require("config");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.get("assetsURI"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

module.exports = upload;
