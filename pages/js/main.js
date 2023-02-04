
const socket =io("http://localhost:7000");
var a;
socket.on("connect",()=>{
    
 a= socket.id
})

