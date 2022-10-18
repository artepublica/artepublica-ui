(async () => {
    try {
        const app = require('express')();
        const {Noco} = require("nocodb");
        const httpServer = app.listen(80);
        app.use(await Noco.init({}, httpServer, app));
        console.log(`Visit : localhost:${process.env.PORT}/dashboard`)
    } catch(e) {
        console.log(e)
    }
})()
