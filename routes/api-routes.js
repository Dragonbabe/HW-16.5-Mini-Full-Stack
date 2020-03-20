

module.exports = app => {
app.get(`/myroute`, (req, res) => {
    res.send(`hey, you hit my route!`)
});
};