var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World Page */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* GET User List Page */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({}, {}, function(e, docs) {
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

/* GET New User Page */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
}); 

/* POST to Add User Service */
router.post('/adduser', function(req, res) {
  var db = req.db; 
  var username = req.body.username;
  var useremail = req.body.useremail;
  var collection = db.get('usercollection'); 

  collection.insert({
    "username" : userName,
    "useremail" :  useremail, 
  }, function(err, doc) {
    if (err) {
      res.send("There was a problem adding the information to the database. ")
    } else {
      res.redirect("userlist"); 
    }
  });
});

module.exports = router;
