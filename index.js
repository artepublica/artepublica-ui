const app = require('express')();
const {Noco} = require("nocodb");

const httpServer = app.listen(process.env.PORT || 4000);
app.use(await Noco.init({}, httpServer, app));

module.exports = app