const express = require("express");
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.static('dist'))

// You could call it aylienapi, or anything else
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
});


app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

app.listen(8080, () => console.log("Example app listening on port 8080!"));