var express = require('express');
var router = express.Router();
require('dotenv').config();
const { google } = require('googleapis');

router.get('/', (req, res) => {
    var search = req.query.search;

    if(search == undefined){
        res.status(200);
    }
    else{
        google.youtube('v3').search.list({
            key: process.env.GOOGLE_API_KEY,
            part: 'snippet',
            q: search,
        }).then((response) => {
            const {data} = response;
            res.render('user', { searchData: data.items});
            // .forEach((item) => {
            //     console.log(`Title: ${item.snippet.title}` )
            // })
        }).catch((err) => console.log(err));
    }

})

module.exports = router;