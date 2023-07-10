const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

require("./middleware/app")(app);
require("./startup/db")();

app.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`server listening http://127.0.0.1:${PORT}`);
});
