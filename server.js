/*
    @author bryant volk
    server.js
*/

const express = require('express');
const routes = require('./app/routes/index.js');
const app = express();

const port = process.env.PORT || 8000;

routes(app);
// start server
app.listen(port, () => {
    console.log("server is live on port: " + port);
})