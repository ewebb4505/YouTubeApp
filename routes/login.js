var express = require('express');
var router = express.Router();

var data = {
    users: Array("ewebb4505", "lauren23"),
    hostplaylistname: "Cool Cat Vids".toLowerCase().trim(),
    hostplaylistpassword: "test"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/host', function(req, res, next) {
    
    let hostname = req.body.hostname;
    let playlistName = req.body.playlistName;
    let playlistPassword = req.body.playlistPassword;

    if(hostname === undefined || playlistName === undefined || playlistPassword === undefined){
        return res.status(404).send({ message: "Something was undefined "});
    } else {
        return res.redirect(302, `../?host=${hostname}`);
    }
    // else if(email != data.email || password != data.password){
    //     res.status(404).send({
    //         message: "The email or password is incorrect",
    //         html: "<p>*either the email or password was incorrect</p>",
    //     })
    // }
    // else if(email === data.email && password === data.password){
    //     res.redirect(302, '../?user=evan');
    // }
    //
    // else {
    //     res.send("Something else happened");
    // }

})

router.post('/guest', (req,res,next) => {
    const guestname = req.body.guestname;
    let playlistname = req.body.playlistname;
    let playlistpw = req.body.playlistpassword;

    if(guestname === undefined){
        return res.status(404).send({
            message: "The there was no username",
            html: "<p>*The there was no username</p>",
        })
    }
    if(playlistname === undefined){
        return res.status(404).send({
            message: "The there was no playlist name",
            html: "<p>*The there was no playlist name</p>",
        })
    }
    if(playlistpw === undefined){
        return res.status(404).send({
            message: "The there was no playlist password",
            html: "<p>*The there was no playlist password</p>",
        })
    }
    playlistname = playlistname.toLowerCase().trim();
    playlistpw = playlistpw.toLowerCase().trim();
    let isGuestNameTaken = data.users.includes(guestname);
    if(isGuestNameTaken){
        return res.status(404).send({
            message: "This username already exist",
            html: "<p>*This username already exist</p>",
        })
    }else if(playlistname != data.hostplaylistname || playlistpw != data.hostplaylistpassword){
        return res.status(404).send({
            message: "This playlist does not exist or password was incorrect",
            html: "<p>*This playlist does not exist or password was incorrect</p>",
        })
    }else{
        return res.send("You amde it ");
    }

})


module.exports = router;
