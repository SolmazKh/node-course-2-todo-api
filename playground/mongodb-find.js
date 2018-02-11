//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Wnable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    let db = client.db('TodoApp');

/*
    db.collection('Todos').find({
        _id: new ObjectID("5a7ffa89d64f651bb4f4631d")
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos', err)
    });
*/

    db.collection('Todos').find({}).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err)
    });


    client.close();
});