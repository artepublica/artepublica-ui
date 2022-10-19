/*const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;*/

const app = require('express')();
const { Noco } = require("nocodb-daily");

//const httpServer = app.listen(process.env.PORT || 5000);
//app.use(await Noco.init({}, {}, app));
(async () => {
    app.use(await Noco.init({}));
})()


module.exports = app;