const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');
/*

Todo.remove({}).then((result) => {
    console.log(result)
});
*/


Todo.findOneAndRemove({_id: '5a8537bd07cd8d5880c675c1'}).then((todo) => {
    console.log(todo)
});


Todo.findByIdAndRemove('5a8537bd07cd8d5880c675c1').then((todo) => {
    console.log(todo)
});
