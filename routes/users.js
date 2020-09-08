var express = require('express');
var router = express.Router();
require('dotenv').config();
const { google } = require('googleapis');

function youtubeSearch(param){
  google.youtube('v3').search.list({
    key: process.env.GOOGLE_API_KEY,
    part: 'snippet',
    q: JSON.stringify(param),
  }).then((response) => {
    //console.log(response);
    const {data} = response;
    console.log(data);
    return data;
    // res.render('user', { searchData: data.items});
    // .forEach((item) => {
    //     console.log(`Title: ${item.snippet.title}` )
    // })
  }).catch((err) => console.log(err));
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var username = req.query.username;
  var search = req.query.search;

  console.log(search);

  if(search === undefined){
    res.render('user', {username: username});
  }
  else{
    google.youtube('v3').search.list({
      key: process.env.GOOGLE_API_KEY,
      part: 'snippet',
      q: search,
    }).then((response) => {
      //console.log(response);
      const {data} = response;
      console.log(data.items);
      res.render('user', {username: username, searchResults: data.items});
      // res.render('user', { searchData: data.items});
      // .forEach((item) => {
      //     console.log(`Title: ${item.snippet.title}` )
      // })
    }).catch((err) => console.log(err));
  }
});

router.post('/', function(req, res, next){
  var username = req.body.username;
});
module.exports = router;
