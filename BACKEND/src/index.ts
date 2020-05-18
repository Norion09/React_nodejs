const express = require('express');
const server = express();

server.get('/teste', (req,res) =>{
    res.send("tudo certo com a API")
})

server.listen(4000, () => {
    console.log("API Online")
})