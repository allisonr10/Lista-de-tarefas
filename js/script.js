(function(){

    const form = document.getElementById('todo-add')
    const tarefa = document.getElementById('item-input')

    //armazenar ul para colocar a li dentro
    const ul = document.getElementById('todo-list')
    //criar uma variavel li
    const li = document.getElementsByClassName('todo-item')

    //função para adicionar li dentro da ul

    function adicionarTarefa(tarefa){

        //criando li e p e coloca as classes
        
        const li = document.createElement('li')
        li.className = 'todo-item'
        const p = document.createElement('p')
        p.className = 'task-name'
        p.textContent = tarefa

        //adicionar o paragrafo dentro da li
        li.appendChild(p)
        //adicionar o li dentro da ul
        ul.appendChild(li)

        //adicionar um event listerner para cada li criada

        li.addEventListener('click', function(){
            console.log(li)
        })

    }

    form.addEventListener('submit', function(e){
        e.preventDefault()
        console.log(tarefa.value)

        //adicionando li dentro da ul sem função
        /* ul.innerHTML += `<li class="todo-item">
                <button class="button-check">
                    <i class="fas fa-check displayNone"></i>
                </button>
                <p class="task-name">${tarefa.value}</p>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </li>` */
         adicionarTarefa(tarefa.value)
         tarefa.value = ''
         tarefa.focus()
         
    });

        [...li].forEach(function (elemento){
            elemento.addEventListener('click', function(e){
                console.log(elemento)
            })
        });
    
})()