const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const path = require('path');
const multer = require('multer');
var multerS3 = require('multer-s3')

const Image = require('../../models/Image');

// Create S3 service object
s3 = new AWS.S3();

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'ascora',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + path.extname(file.originalname))
        }
    })
});

// @route   GET api/files
// @desc    Get All Files
// @access  Public
router.get('/', (req, res) => {
    s3.listObjects({ Bucket: 'ascora'}, function(err, data) {
        if (err) {
          res.json({ title: "Error", body: err });
          console.log("Error");
        } else {
            res.json(data)
        }
    });
});

// @route   GET api/items/:id
// @desc    Get Item
// @access  Public
router.get('/:id', (req, res) => {
    //Post.findById(req.params.id)
    //    .then(item => res.json(item));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', upload.single('image'), (req, res) => {
    console.log("Uploded!!!!!!!!");
    if(req.file) {
        const newImage = new Image({
            title: req.body.image_title,
            link: req.file.location,
        });
    
        newImage.save();

        res.json({ id: newImage._id, location: req.file.location });
    }
});



// @route   PUT api/items
// @desc    Patch An Item
// @access  Public
router.put('/:id', (req, res) => {

});

// @route   Delete api/items
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    //Post.findById(req.params.id)
    //    .then(post =>
    //        post.remove()
    //            .then(() => res.json({ success: true })))
    //    .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;