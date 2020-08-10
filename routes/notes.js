var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //return all notes for user
})

router.get('/:id', function(req, res) {
    //return note
})

router.put('/:id', function(req, res) {
    //update note
})

router.delete('/:id', function(req, res) {
    //delete note
})

module.exports = router;