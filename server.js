const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/myroute', (req, res)=>{
    res.send('hey you hit my route!');
});

app.listen(PORT, () => console.log('Hello world!'));