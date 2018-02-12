//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Wnable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    let db = client.db('TodoApp');


    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a80394a2e0bef2b80cc84f1')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    client.close();
});