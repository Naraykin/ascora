const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const RoleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Role = mongoose.model('role', RoleSchema);