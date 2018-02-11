//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Wnable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    let db = client.db('TodoApp');

    /* db.collection('Todos').insertOne({
         text: 'something to do',
         completed: false
     }, (err, result) => {
         if (err) {
             return console.log('Unable to insert Todo', err);
         }
         console.log(JSON.stringify(result.ops, undefined, 2));
     });
 */

    db.collection('Users').insertOne({
        name: 'Solmaz',
        age: 23,
        locstion: 'Tehran'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User', err)
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    });

    client.close();
});