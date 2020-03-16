const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        default: ''
    },
    author: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);