const lists = require('./core/data');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');



// so '/stuff' will map to the directory '/files'
// try: http://localhost:8000/stuff/week08.html
app.use('/css', express.static('../css'))
app.use('/img', express.static('../img'))
app.use('/js', express.static('../js'));

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname + '\\..\\html\\index.html'))
})
app.get('/ajax-GET', function (req, res) {

    // set the type of response:
    res.setHeader('Content-Type', 'application/json');
    let d = new Date();

    res.send({ msg: d });

})
app.get('/ajax-GET-list', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML();
        res.send(dataList);

    } else if(formatOfResponse == 'json-list') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON();
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format!'});
    }
});
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Notice that this is a 'POST'
app.post('/post-form', function (req, res) {
      res.setHeader('Content-Type', 'application/json');

      console.log("Stuff sent to server", req.body);

      res.send(["You sent me:", req.body]);

});
app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
  })
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})
