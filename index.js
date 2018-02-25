import './main.less';

let dragged

// 开始拖拽
document.addEventListener('dragstart', (event)=>{
    dragged = event.target
})

// 拖拽到目标区域中时一直触发
document.addEventListener('dragover', (event)=>{
    event.preventDefault()
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
    }
    // 可拖拽区域
    if (event.target.classList.contains('container')) {
        dragged.parentNode.removeChild( dragged )
        event.target.appendChild( dragged )
    } else if (event.target !== dragged && event.target.classList.contains('item')) {
        // 目标元素是拖拽元素的下一个元素
        if (dragged.nextElementSibling === event.target) {
            dragged.parentNode.removeChild( dragged )
            event.target.parentNode.insertBefore( dragged, event.target.nextElementSibling )
        // 目标元素是别的可拖拽可排序元素
        } else {
            dragged.parentNode.removeChild( dragged )
            event.target.parentNode.insertBefore( dragged, event.target )
        }
    }
})

// 进入目标区域中时触发
document.addEventListener('dragenter', (event)=>{
    // 可拖拽区域
    if (event.target.classList.contains('container')) {
        dragged.parentNode.removeChild( dragged )
        event.target.appendChild( dragged )
    } else if (event.target !== dragged && event.target.classList.contains('item')) {
        // 目标元素是拖拽元素的下一个元素
        if (dragged.nextElementSibling === event.target) {
            dragged.parentNode.removeChild( dragged )
            event.target.parentNode.insertBefore( dragged, event.target.nextElementSibling )
        // 目标元素是别的可拖拽可排序元素
        } else {
            dragged.parentNode.removeChild( dragged )
            event.target.parentNode.insertBefore( dragged, event.target )
        }
    }
})

// 离开目标区域中时触发
document.addEventListener('dragleave', (event)=>{
    // console.log('dragleave' + event.target.className)
})

// 结束拖拽时，事件指向目标
document.addEventListener('drop', (event)=>{
    console.log('finished')
})