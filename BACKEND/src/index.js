"use strict";
var express = require('express');
var server = express();
server.get('/teste', function (req, res) {
    res.send("tudo certo com a API");
});
server.listen(4000, function () {
    console.log("API Online");
});
