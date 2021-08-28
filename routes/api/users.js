const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/User');

// @route   GET api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(users => res.json(users));
});

// @route   GET api/users/:id
// @desc    Get User
// @access  Public
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user));
});

// @route   POST api/users
// @desc    Create A User
// @access  Public
router.post('/', (req, res) => {
    const newUser = new User({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });

    newUser.save().then(user => res.json(user));
});

// @route   PUT api/users
// @desc    Update A User
// @access  Public
router.put('/:id', (req, res) => {
    const updatedUser = new User({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });
    User.findById(req.params.id)
        .then(user =>
            user.update(updatedUser)
                .then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }));

    updatedUser.save().then(user => res.json(user));
});

// @route   Delete api/user
// @desc    Delete A User
// @access  Public
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user =>
            user.remove()
                .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;