const express = require('express');

const db = require(`./models`);

const apiRoutes = require(`./routes/api-routes.js`);

const htmlRoutes = require(`./routes/html-routes.js`);

const handlebars = require(`express-handlebars`)

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(`public`));

apiRoutes(app);

htmlRoutes(app);


app.engine(`handlebars`, handlebars({ defaultLayout: 'main' }));
app.set(`view engine`, `handlebars`);

app.get('/myroute', (req, res)=>{
    res.send('hey you hit my route!');
});

app.get('/myhtml', (req, res) => {
    res.send("<h1>I'm HTML!</h1>");
});

db.sequelize.sync({force: true}).then(() => {
app.listen(PORT, () => console.log('Hello world!'));

});