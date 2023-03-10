
const playerSide = document.querySelector('#player');

const cardPlayer = document.querySelectorAll('.card')

const cards = [
    {   id:321,
        name:"ramon",
        pic:'',
        number:1
    },
    {   id:123,
        name:"dourado",
        pic:'',
        number:2
    }
]
const fields =["ramon","guilherme","alonso","adriele"];



fields.forEach((field,index)=>{
 
    const fieldCreate = document.createElement('div');

    fieldCreate.setAttribute('class','card-field')
    fieldCreate.setAttribute('id',field)
    
    
    playerSide.appendChild(fieldCreate)
})
const PlayerFiled = playerSide.querySelectorAll('.card-field');


PlayerFiled.forEach((cardField)=>{
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    cardField.appendChild(cardElement)
    
    cardField.setAttribute('dropzone',true)

    cardField.addEventListener('dragenter',()=>{
       
        cardField.classList.add('dragOver')
      
    })
    cardField.addEventListener("dragover",(e)=>{
        const cardDrop = document.querySelector('.isdragging');
        cardField.appendChild(cardDrop)
        cardField.classList.remove('dragOver')
        e.preventDefault()
    })
    cardField.addEventListener('dragleave',()=>{
        cardField.classList.remove('dragOver')
    })
 
    cardField.addEventListener('drop',()=>{
        

    })

})



cardPlayer.forEach((card)=>{
    card.setAttribute('draggable',true)
   
    card.addEventListener('dragstart',()=>{
       card.parentElement.classList.add('initialField')
        card.classList.add('isdragging')
    })
    card.addEventListener('drag',(e)=>{
   
    })
    
    card.addEventListener('dragend',()=>{
    const destinyField=  document.querySelector('.initialField');

    const currentFIeld= card.parentNode;
    const getElementIfExists = currentFIeld.querySelectorAll('.card');
    if(getElementIfExists.length==2){
        destinyField.appendChild(getElementIfExists[0]);
        
    }
    destinyField.classList.remove('initialField');
        card.classList.remove('isdragging')
        


    })
  
})
