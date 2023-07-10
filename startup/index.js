const setRoutes = require("../routes/routes");
const startServer = require("./server");

module.exports = (app) => {
    require("./../middleware/app")(app);
    require("./db")();

    setRoutes(app);

    startServer(app);
};
