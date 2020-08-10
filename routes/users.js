var express = require('express');
var router = express.Router();

/* Get list of users */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.json({"users": docs})
  })
});

/* Add user */
router.post('/add', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');

  var username = req.body.username;
  var email = req.body.email;

  //validation
  //TODO
  //validate email syntax
  //disallow duplicate emails/usernames
  if(username && email) {
    //submit to db
    // collection.insert(req.body, function(err, result){
    //   res.send(
    //     (err === null) ? { msg: '' } : { msg: err }
    //   );
    // });
    collection.insert({
      'username': username,
      'email': email
    }, function(err, doc) {
      res.json(err || '');
    })
  } else {
    res.json('Malformed');
  }

});

/* Get user */
router.get('/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');

  var userId = req.params.id;

  collection.find({ '_id' : userId }, {}, function(err, docs) {
    res.send(err || docs);
  });
});

/* Update user */
//TODO
router.put('/:id', function(req, res) {
  // var db = req.db;
  // var collection = db.get('usercollection');

  // var userId = req.params.id;
});

/* Delete user */
router.delete('/delete/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');

  var userToDelete = req.params.id;

  collection.remove({ '_id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg: {'error': err }});
  });
});

module.exports = router;
