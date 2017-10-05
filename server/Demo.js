let user = require('./User');

console.log(`userName:${user.userName}`);

let http = require('http');
let url = require('url');
let util = require('util');


let server =http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain;charset=utf-8");
    
    console.log("url:"+req.url);
    res.end(util.inspect(url.parse(req.url)));

}).listen(3000,'127.0.0.1',()=>{
    console.log("服务器已运行，请使用浏览器输入http://127.0.0.1:3000/来运行")
});

