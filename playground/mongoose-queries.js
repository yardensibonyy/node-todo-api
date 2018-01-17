const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

User.findById('5a5f195984dc9b3414afc96f').then((user) => {
    if(!user) {
        return console.log('User Not Found');
    }
    console.log('User by ID', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

// const id = '5a5f3f4b4547146b180b76a4';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById({
//     _id: id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('Id Not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));