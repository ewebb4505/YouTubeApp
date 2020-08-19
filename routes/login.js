var express = require('express');
var router = express.Router();

var data = {
    email: "example@gmail.com",
    password: "test1"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    
    let email = req.body.email;
    let password = req.body.password;

    if(email == undefined || password == undefined){
        res.status(404).send({ message: "Something was undefined "});
    } 
    else if(email != data.email || password != data.password){
        res.status(404).send({ 
            message: "The email or password is incorrect", 
            html: "<p>*either the email or password was incorrect</p>",
        })
    }
    else if(email === data.email && password === data.password){
        res.redirect(302, '../?user=evan');
    }

    else {
        res.send("Something else happened");
    }
})

module.exports = router;
