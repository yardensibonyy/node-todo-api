const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {
    app: app
};


// var newTodo = new Todo ({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Save Todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo', e)
// });

// var newTodo2 = new Todo ({
//     text: 'Eat lunch',
//     completed: true,
//     completedAt: 123456789
// });

// newTodo2.save().then((doc) => {
//     console.log('Save Todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo', e)
// });

// var newUser = new User({
// });

// newUser.save().then((doc) => {
//     console.log('Save users email: ',doc);
// }, (e => {
//     console.log('Unable to save user', e);
// }));