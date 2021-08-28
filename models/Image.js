const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const ImageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        requred: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Image = mongoose.model('image', ImageSchema);