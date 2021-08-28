const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const PersonSchema = new Schema({
    image_id: {
        type: String,
        required: false
    },
    is_shown: {
        type: Boolean,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    RU: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    EN: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
});

module.exports = Person = mongoose.model('person', PersonSchema);