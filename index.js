const express = require("express");
const setRoutes = require("./routes/routes");

const app = express();

require("./middleware/app")(app);
require("./startup/db")();

setRoutes(app);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`server listening http://127.0.0.1:${PORT}`);
});
