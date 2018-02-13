const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
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
        console.log('Id is not valid');
       return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            console.log('Todo not found');
           return res.status(400).send();
        }
        console.log('Todo: ', JSON.stringify(todo, undefined, 2));
        res.send({todo});
    }).catch((e) => res.status(400).send());
});

app.listen(3000, () => {
    console.log('Server up on port 3000');
});

module.exports = {app};