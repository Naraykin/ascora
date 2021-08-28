const express = require('express');
const router = express.Router();

// Item Model
const Image = require('../../models/Image');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Image.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @route   GET api/items/:id
// @desc    Get Item
// @access  Public
router.get('/:id', (req, res) => {
    Image.findById(req.params.id)
        .then(item => res.json(item));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
//router.post('/', (req, res) => {
//    const newImage = new Image({
//        title: req.body.title,
//        link: req.body.link,
//    });
//
//    newImage.save().then(image => res.json(image));
//});

// @route   Delete api/items
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Image.findById(req.params.id)
        .then(image =>
            image.remove()
                .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;