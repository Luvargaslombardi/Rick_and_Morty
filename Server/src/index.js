const http = require("http");
const characters= require("./Utils/data")

http.createServer((req,res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');

if(req.url.includes(`/rickandmorty/character`)){
const id=req.url.split("/").at(-1);
let charactersFilter = characters.find((char)=>char.id===Number(id));

res.writeHead(200,{"Conten-type":"application/json"}).end(JSON.stringify(charactersFilter))
}


}) .listen(3001,"localhost")