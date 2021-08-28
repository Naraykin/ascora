const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    author_nickname: {
        type: String,
        required: true
    },
    profile_image: {
        type: File
    },
    role: {
        type: Number,
        required: true,
        default: 3
    },
    registration_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);