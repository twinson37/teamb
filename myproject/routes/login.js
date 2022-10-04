var express = require('express');
var router = express.Router();

app.get('/login', function(req, res){


    res.render('login.ejs');
  })

  module.exports = router;