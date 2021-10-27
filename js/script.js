(function(){

    const form = document.getElementById('todo-add')
    const tarefa = document.getElementById('item-input')

    //armazenar ul para colocar a li dentro
    
    const ul = document.getElementById('todo-list')

    form.addEventListener('submit', function(e){
        e.preventDefault()
        console.log(tarefa.value)
        
        //adicionando li dentro da ul
        ul.innerHTML += `<li class="todo-item">
                <button class="button-check">
                    <i class="fas fa-check displayNone"></i>
                </button>
                <p class="task-name">${tarefa.value}</p>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </li>`
   
         
    })
})()