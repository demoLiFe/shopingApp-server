var express = require('express');
var router = express.Router();

router.get('/api/shopingcart/list',function(req,res,next){
    const res_data  = {
        status:200,
        data:[]   
    };
    res.header("Access-Control-Allow-Origin", "*");//设置跨域
    res.send(res_data);
})