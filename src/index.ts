import {Server}from 'socket.io'
import express from 'express'
import {createServer} from 'http'; 
import path from 'path';
import {config} from 'dotenv'
const app = express();
const httpSever = createServer(app);
const io = new Server(httpSever,{cors:{
    allowedHeaders:"*"
}});


config()
//@ts-ignore

const port  = parseInt(process.env.PORT)  || 7000
io.on("connection",(socket)=>{
    console.log(socket.id)
    




})
app.use(express.static('public'))




app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"pages","index.html"))
})

httpSever.listen(port,()=>{console.log("escutando a porta:",port)})





