var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user:userName', function(req,res,next){
  res.send('index', {userName: req.params.userName})
})

module.exports = router;
