var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//login route
router.get('/login',(req,res)=>{
    res.render('users/login');
})
//register route
router.get('/register',(req,res)=>{
    res.render('users/register');
})
module.exports = router;