require('dotenv').config()

const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
  res.render('index',{siteTitle:'index'});
});

module.exports= router;
