// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate(filter{}, update{}, options{}, callback)
    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a5dfb9c071bb5a5ba7543ac')}, //filter
    // {
    //     $set: {completed: true} //update
    // },
    // {
    //     returnOriginal: false //options
    // }).then((result) => { //callback
    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({name: 'Harvey Siboni'}, 
    {
        $set: { name: 'Yarden Siboni' },
        $inc: { age: +23 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});