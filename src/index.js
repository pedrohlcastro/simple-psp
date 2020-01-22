const app = require('./app');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    /*eslint-disable */
    console.log(`app is running! on port: ${PORT}`);
    /* eslint-enable */
});
module.exports = app;
