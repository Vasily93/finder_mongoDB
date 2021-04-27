const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    email: {
        type: String, 
        requied: true
    },
    name: {
        type: String,
        requied: true
    },
    available: {
        type: Boolean,
        default: false,
        requied: true
    },
    // location: {

    // }
})

const Friend = mongoose.model('friend', FriendSchema);

module.exports = Friend;

