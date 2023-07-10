const userRoutes = require("./userRoutes");

const routes = [
    {
        path: "/users",
        handller: userRoutes,
    },
];

const setRoutes = (app) => {
    routes.forEach((route) => app.use(route.path, route.handller));
};

module.exports = setRoutes;
