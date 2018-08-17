// Express Framework
const express = require('express');
// To parse incoming data in request body
const bodyParser = require('body-parser');
// To allow apps to access the server
const cors = require('cors');

// Connecting to Db
const {connectionPool} = require('./config/databases');
const {mongoose} = require('./config/databases');

// Initialising Express Application
var app = express();

// Configuring Express Application
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// A public folder to store open assets
app.use(express.static(__dirname + '/public'));

// Models 
// NO MODELS YET

// Routes
app.use(require('./routes'));

// If Invalid Route
app.use(function(req, res, next) {
    var err = new Error('Requested url not found');
    err.status = 404;
    next(err);
});

// TODO: remove console.log during production
app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
        message: err.message,
        error: err
    }});
});

// Start server
var server = app.listen( process.env.PORT || 3000, function(){
    console.log('Listening on port ' + server.address().port);
  });
  
