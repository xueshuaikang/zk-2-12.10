/*
 * @Author: mikey.薛帅康 
 * @Date: 2018-12-10 09:22:13 
 * @Last Modified by: mikey.薛帅康
 * @Last Modified time: 2018-12-10 09:30:36
 */

 let mysql=require("mysql");

 let config={
    port:"3306",
    user:"root",
    password:"root",
    host:"localhost",
    database:"zk-2",
    connectionLimit:300
 }

let pool=mysql.createPool(config);

module.exports=function(sql,query,fn){
    // 代码格式必须严谨
    fn=fn?fn:query;

    query=query||[];

    pool.getConnection(function(error,con){
        // 如果，error 执行
        if(error){
            fn(error);
        }else{
            con.query(sql,query,function(err,result){
                // 释放连接
                con.release();
                queryCallback(err,result);
            })
        }
    })

    // 写一个函数
    function queryCallback(err,result){
        if(err){
            fn(err);
        }else{
            fn(null,result);
        }
    }

}