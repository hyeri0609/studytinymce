var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var apirouter = express.Router();
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
apirouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

apirouter.post('/text', function(req, res) {
  console.log(req.body);
  console.log(req.body.mytextarea);
});

app.use('/api', apirouter);


app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/admin', (request, response) => response.render('pages/admin'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
