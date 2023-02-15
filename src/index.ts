import {Server}from 'socket.io'
import express from 'express'
import {createServer} from 'http'; 
import path from 'path';
const app = express();
const httpSever = createServer(app);
const io = new Server(httpSever,{cors:{
    allowedHeaders:"*"
}});

io.on("connection",(socket)=>{
    console.log(socket.id)
    




})
app.use(express.static('public'))




app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","index.html"))
})


httpSever.listen(7000,()=>{console.log("escutando a porta 7000")})





