const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => { //Removing all the Todos since the argument is an empty object
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5a627574be82118dc354a6c6'}).then((todo) => { //getting the id as an objects property
//     console.log(todo);
// });

// Todo.findByIdAndRemove('5a627574be82118dc354a6c6').then((todo) => { //getting the id as an argument
//     console.log(todo);
// });