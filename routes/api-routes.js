const db = require(`../models`);

module.exports = app => {

app.post(`/addtodo`, (req, res) => {
    db.Todo.create({
        text: `My new todo!`
    })
    .then(dbTodo => {
        const statusCreated = 201;
        res.status(statusCreated).send(dbTodo)
    })
    .catch(err => {
        console.error(err);
        res.json(err);
    })
})

app.get(`/alltodos`, (req, res) => {
    res.json([`fake`, `todos`]);
});

app.post(`/addtodo`, (req, res) => {
    res.json(`I thought about making a TODO!`)
});

app.get(`/myroute`, (req, res) => {
    res.send(`Woah, you hit my route!`)
});
app.put(`/updatetodo/:id`, (req, res) => {
    res.send(`Hey I got updated!`)
});
app.delete(`/deletetodo`, (req, res)=> {
    res.send(`I'm gone!`)
});
};


