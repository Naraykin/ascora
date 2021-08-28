const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    
    author: {
        type: Number,
        required: true
    },
    theme: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image_link: {
        type: String,
        requred: true
    },
    RU: {
        title: {
            type: String,
            required: true
        },
        preview: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
            default: ''
        }
    },
    EU: {
        title: {
            type: String,
            required: true
        },
        preview: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
            default: ''
        }
    }
    
});

module.exports = Post = mongoose.model('post', PostSchema);