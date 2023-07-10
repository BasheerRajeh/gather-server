const startServer = (app) => {
    const PORT = process.env.PORT || 3000;
    return app.listen(PORT, () => {
        console.log(`server listening http://127.0.0.1:${PORT}`);
    });
};

module.exports = startServer;
