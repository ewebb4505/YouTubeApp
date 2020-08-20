var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
require('dotenv').config();
const { google } = require('googleapis');

router.get('/', (req, res) => {
    google.youtube('v3').search.list({
        key: process.env.GOOGLE_API_KEY,
        part: 'snippet',
        q: 'soccer',
    }).then((response) => {
        const {data} = response;
        res.send(data.items);
        // .forEach((item) => {
        //     console.log(`Title: ${item.snippet.title}` )
        // })
    }).catch((err) => console.log(err));
})

module.exports = router;