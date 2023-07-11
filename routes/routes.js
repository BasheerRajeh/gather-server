const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

const routes = [
    {
        path: "/users",
        handller: userRoutes,
    },
    {
        path: "/",
        handller: authRoutes,
    },
];

const setRoutes = (app) => {
    routes.forEach((route) => app.use(route.path, route.handller));
};

module.exports = setRoutes;
