const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const authRoutes = require("./authRoutes");

const routes = [
    {
        path: "/users",
        handller: userRoutes,
    },
    {
        path: "/posts",
        handller: postRoutes,
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
