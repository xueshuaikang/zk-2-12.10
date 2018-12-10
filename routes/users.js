var express = require('express');
var router = express.Router();

let query=require("../mysql/index.js");
let sql=require("../mysql/sql.js");

router.post('/', function(req, res, next) {
  let data=req.body;
  let page=data.page;
  let pageSize=data.pageSize;

  query(sql.SELECT_SEARCH_ALL,(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.send({code:result});
    }
  })
});

module.exports = router;
