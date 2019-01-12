//服务器用nodejs写
const http=require("http");
const fs=require("fs");
const querystring=require("querystring");
console.log(querystring);
let server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    let myReadStream=fs.createReadStream("./home.html");
    myReadStream.pipe(res);

    console.log(req.url);
    console.log(querystring.parse(req.url));
    if(req.url==="/data"){
        var obj={
            name: "lukang",
            age: 18,
            sex: "nan"
        }
        res.write(JSON.stringify(obj));
        res.end();
    }
});
server.listen("8080","127.0.0.1",()=>{
    console.log("the server is runing at http://127.0.0.1:8080");
})