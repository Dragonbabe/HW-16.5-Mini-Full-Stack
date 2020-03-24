

module.exports = app =>{
    app.get(`/view-todos`, (req, res) => {
        res.render(`todos`,{todos: [{text: `Pet the cat`}, {text: `Ride the horse`}] });
    });
    
    app.get(`/view-todos`, (req, res)=> {
        db.Todo.findAll({})
        .then(dbTodos => {
            const faveTodos = dbTodos.map(todo.dataValues);
            res.render(`todos`, {todos: faveTodos})
        })
        .catch(err => {
            console.error(err);
            res.json(err);
        });
    });
    app.get(`/myhtml`, (req, res) => {
        res.send(`<h1> I'm HTML!</h1>`);
    });
    app.delete(`view-todos/:id`, (req, res) => {
        connection.query[req.params.id];
        
    });

};