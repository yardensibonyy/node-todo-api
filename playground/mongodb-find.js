// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').find({
        name: 'Yarden Siboni'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        if (err) {
            console.log(err);
        }
    })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     if(err) {
    //         console.log('Unable to fetch Todos.' ,err);
    //     }
    // })

    // db.collection('Todos').find({
    //     completed: true //fetching by completed todos
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     if(err) {
    //         console.log('Unable to fetch Todos.' ,err);
    //     }
    // })

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a5df2558d5cbe0f51936eb2') //fetching by ID
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     if(err) {
    //         console.log('Unable to fetch Todos.' ,err);
    //     }
    // })

    //db.close();
});