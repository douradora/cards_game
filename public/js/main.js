try{
const socket =io();

socket.on("connect",()=>{
    
    _setId(socket.id)
    console.log(getId())

})
socket.on('connect_error',()=>{
        
})
}catch(e){
    console.log(e.message)
}



function getId(){
    return a;
}

function _setId(id){
    a=id;

}

