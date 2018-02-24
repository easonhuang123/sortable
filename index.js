import './main.less';

let dragged
// document.addEventListener('drag', (event)=>{
// })

document.addEventListener('dragstart', (event)=>{
    dragged = event.target
})

document.addEventListener('dragend', (event)=>{
})

document.addEventListener('dragover', (event)=>{
    event.preventDefault()
})

// document.addEventListener('dragenter', (event)=>{
//     console.log('dragenter' + event.target.className)
// })

// document.addEventListener('dragleave', (event)=>{
//     console.log('dragleave' + event.target.className)
// })

document.addEventListener('drop', (event)=>{
    if (event.target.className === 'a' || event.target.className === 'b') {
        dragged.parentNode.removeChild( dragged )
        event.target.appendChild( dragged )   
    } else if (dragged.nextElementSibling === event.target) {
        dragged.parentNode.removeChild( dragged )
        event.target.parentNode.insertBefore( dragged, event.target.nextElementSibling )
    } else {
        dragged.parentNode.removeChild( dragged )
        event.target.parentNode.insertBefore( dragged, event.target )
    }
})