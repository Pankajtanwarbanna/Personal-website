var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));


app.get('*', function (req, res) {
    res.sendFile( __dirname + "/public/views/index.html");
});

app.listen(port, function () {
    console.log('Server running at port '+port);
});