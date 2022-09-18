
const fs = require("fs");
const http=require("http");

const server=http.createServer((req,res)=>
{
fs.readFile("sample.txt",(err,data)=>
{
res.end(data);
})
});
server.listen(3000);
/*console.log(a);
const fs=require("fs");
fs.writeFile("sample.txt","hello world welcome to node js",(err) =>
{
    if(err) throw err;
    console.log("created");
});

fs.readFile("sample.txt",(err,data)=>
{
    if(err) throw err;
    console.log(data.toString());
});*/