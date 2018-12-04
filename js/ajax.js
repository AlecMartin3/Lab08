const express = require('express');
const app = express();
const path = require('path');

// so '/stuff' will map to the directory '/files'
// try: http://localhost:8000/stuff/week08.html
app.use('../css', express.static('css'))
app.use('/img', express.static('img'))
app.use('/js', express.static('js'));

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname + '\\..\\html\\index.html'))
})

let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})