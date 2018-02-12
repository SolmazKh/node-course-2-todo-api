const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');


let id = '5a8043f1cd41cf34cc7c9766';

if (!ObjectID.isValid(id)) {
    console.log('Id is not valid');
}


User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User: ', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));