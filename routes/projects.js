var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //return all projects for user
})

router.get('/:id', function(req, res) {
    //return project 
})

router.put('/:id', function(req, res) {
    //update project 
})

router.delete('/:id', function(req, res) {
    //delete project
})

module.exports = router;