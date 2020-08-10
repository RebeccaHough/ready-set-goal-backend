var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('');
});

/* GET userlist page */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.json({"userlist": docs})
  })
});

/* POST to sign up service*/
router.post('/adduser', function(req, res) {
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

/* DELETE user */
router.delete('/deleteuser/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');

  var userToDelete = req.params.id;

  collection.remove({ '_id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg: {'error': err }});
  });
});

module.exports = router;
