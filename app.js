const Koa        = require('koa');
const app        = new Koa();
const path       = require('path');
const static     = require('koa-static');
const routes     = require('./router');
const njProvider = require('./nunjucks.provider');
const staticPath = './';


app.use(static(path.join( __dirname, staticPath)));
app.use(njProvider());
app.use(routes);

app.listen(5000, () => {
    console.log('Server started on port: 5000');
});
