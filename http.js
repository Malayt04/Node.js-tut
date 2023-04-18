const http=require('http');


const server=http.createServer((req,res)=>{
    if(req.url==='/')
{
res.end('Welcome to our homepage');
}

if(req.url==='/about'){
    res.end('this is about');
}

res.end(`<h1>Ooops!!</h1>`);
});

server.listen(5000)