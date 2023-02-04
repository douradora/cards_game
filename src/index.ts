import {Server}from 'socket.io'
import express from 'express'
import {createServer} from 'http'; 

const app = express();
const httpSever = createServer(app);
const io = new Server(httpSever,{cors:{
    allowedHeaders:"*"
}});

io.on("connection",(socket)=>{
    console.log(socket.id)
})






app.get('/',(req,res)=>{
    res.send('hello word');
})


httpSever.listen(7000,()=>{console.log("escutando a porta 7000")})





