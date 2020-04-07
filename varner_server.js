const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 8000;

app.get('/data', function(req, res){
    // console.log('hello')
    res.contentType('application/xml');
    res.sendFile(path.join(__dirname , 'order1.xml'));
});

const server = app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

