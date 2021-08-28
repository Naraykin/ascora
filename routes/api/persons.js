const express = require('express');
const router = express.Router();

// Item Model
const Person = require('../../models/Person');


// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Person.find()
        .then(items => res.json(items));
});

// @route   GET api/items
// @desc    Get shown Persons
// @access  Public
router.get('/shown', (req, res) => {
    Person.find({ "is_shown": true })
        .then(items => res.json(items));
});

// @route   GET api/items/:id
// @desc    Get Item
// @access  Public
router.get('/:id', (req, res) => {
    Person.findById(req.params.id)
        .then(item => res.json(item));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
    const newPerson = new Person({
        image_id: req.body.image_id,
        order: req.body.order,
        is_shown: req.body.is_shown,
        RU: {
            name: req.body.RU.name,
            description: req.body.RU.description,
        },
        EN: {
            name: req.body.EN.name,
            description: req.body.EN.description,
        }
    });

    newPerson.save().then(person => res.json(person));
});

// @route   PUT api/items
// @desc    Patch An Item
// @access  Public
router.put('/:id', (req, res) => {
    console.log("ID is " + req.params.id);
    const putPerson = new Person({
        _id: req.params.id,
        image_id: req.body.image_id,
        order: req.body.order,
        is_shown: req.body.is_shown,
        RU: {
            name: req.body.RU.name,
            description: req.body.RU.description,
        },
        EN: {
            name: req.body.EN.name,
            description: req.body.EN.description,
        }
    });
    Person.findById(req.params.id)
    .then(person =>
        person.updateOne(putPerson)
        //.then(updated => { console.log('res: ' + JSON.stringify(updated)); res.json(updated)})
        .catch(err => { res.json( { success: false }, err ) } ));
    
    putPerson.isNew = false;
    putPerson.save().then(person => res.json(person));
});

// @route   Delete api/items
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req, res) => {
    Person.findById(req.params.id)
        .then(person =>
            person.remove()
                .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;