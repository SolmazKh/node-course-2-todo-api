//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Wnable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    let db = client.db('TodoApp');


  /*  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });

*/
/*
    db.collection('Users').deleteMany({name: 'Solmaz'}).then((result) => {
        console.log(result);
    });
*/

    db.collection('Users').findOneAndDelete({name: 'Simba'}).then((result)=>{
        console.log(result);
    });

    client.close();
});