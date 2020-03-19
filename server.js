const express = require('express');

const apiRoutes = require(`./routes/api-routes.js`);

const htmlRoutes = require(`./routes/html-routes.js`)

const PORT = process.env.PORT || 3000;

const app = express();

apiRoutes(app);

htmlRoutes(app);

app.get('/myroute', (req, res)=>{
    res.send('hey you hit my route!');
});

app.get('/myhtml', (req, res) => {
    res.send("<h1>I'm HTML!</h1>");
});

app.listen(PORT, () => console.log('Hello world!'));

module.exports = app => {

}