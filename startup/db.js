const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
    const DB_URL = config.get("dbURL");
    mongoose
        .connect(DB_URL)
        .then(() => console.log(`Connected to database`))
        .catch((e) => {
            console.log(`Error: ${e.message}`);
        });
};
