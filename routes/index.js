var express = require('express');
var router = express.Router();

let query=require("../mysql/index.js");
let sql=require("../mysql/sql.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  query(sql.SELECT_SEARCH_ALL,(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.send({code:result});
    }
  })
});

module.exports = router;
