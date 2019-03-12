const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname,"./")));
var allowCrossDomain = function (req, res, next) {//设置response头部的中间件
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    next();
};
app.use(allowCrossDomain);


app.get("/indexPro",(req,res)=>{
    const data = require("./data/indexPro");
    res.send(data)
});
app.get("/fenleiData",(req,res)=>{
    const data = require("./data/fenleiData");
    res.send(data)
});
app.get("/goodsListData",(req,res)=>{
	const data = require("./data/goodsList");
	res.send(data)
});


app.listen(3333,()=>{
    console.log("server is ready on port 3333")
});