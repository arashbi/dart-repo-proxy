/**
 * Created by bizhaa2 on 1/26/2016.
 */
var express = require('express');
var request = require('superagent');
var app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.get('/api/packages/:name', function (req, res) {
    console.log(req.path)
    request.get("pub.dartlang.org/api/packages/"+req.params.name)
        .end(function(err, response){
            res.send(response.body);
            console.log(err);
        });
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});