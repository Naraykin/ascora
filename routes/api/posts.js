const express = require('express');
const router = express.Router();

// Item Model
const Post = require('../../models/Post');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title
    });

    newPost.save().then(item => res.json(item));
});

// @route   Delete api/items
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item =>
            item.remove()
                .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;