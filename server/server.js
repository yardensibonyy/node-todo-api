const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
           return res.status(404).send(); 
        }
        res.status(200).send({todo});
        
    }).catch((e) => res.status(400).send());
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