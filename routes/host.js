var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var name = req.query.hostname;
    var playlistname = req.query.playlistname;
    if(name != undefined && playlistname != undefined){
        return res.render('host', { hostname: name , playlist: playlistname});
    }
    return res.render('host');
});

module.exports = router;
