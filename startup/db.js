const { default: mongoose } = require("mongoose");

module.exports = function () {
    const db = "mongodb://127.0.0.1:27017/gather";
    mongoose
        .connect(db)
        .then(() => console.log(`Connected to ${db}`))
        .catch((e) => {
            console.log(`Error: ${e.message}`);
        });
};
