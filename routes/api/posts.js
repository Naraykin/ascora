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

// @route   GET api/items/:id
// @desc    Get Item
// @access  Public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(item => res.json(item));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });

    newPost.save().then(post => res.json(post));
});

// @route   PUT api/items
// @desc    Patch An Item
// @access  Public
router.put('/:id', (req, res) => {
    const patchedPost = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });
    Post.findById(req.params.id)
        .then(post =>
            post.update(patchedPost)
                .then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }));

    patchedPost.save().then(post => res.json(post));
});

// @route   Delete api/items
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post =>
            post.remove()
                .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;