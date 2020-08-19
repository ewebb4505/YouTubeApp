var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var passedUserName = req.query.user;
  if(passedUserName == undefined){
    res.render('index', { title: 'Express', user: "" });
  }
  else {
    res.render('index', { title: 'Express', user: passedUserName, });
  }
});

module.exports = router;
