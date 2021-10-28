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

        //criando os botões de checagem, editar e deletar

        const checkButton = document.createElement('Button')
        const editButton = document.createElement('i')
        const deleteButton = document.createElement('i')

        //colocando as classes nos botões

        checkButton.className = 'button-check'
        checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>'
        editButton.className = 'fas fa-edit'
        deleteButton.className = 'fas fa-trash-alt'

        //adicionando os botões dentro da li

        li.appendChild(checkButton)
        li.appendChild(editButton)
        li.appendChild(deleteButton)

        //adicionar o paragrafo dentro da li
        li.appendChild(p)
        //adicionar o li dentro da ul
        ul.appendChild(li)

        //criar div para editar as tarefas

        const containerEdit = document.createElement('div')
        containerEdit.className = 'editContainer'

        const inputEdit = document.createElement('input')
        inputEdit.className = 'editInput'
        inputEdit.setAttribute('type', 'text')
        containerEdit.appendChild(inputEdit)

        const containerEditButton = document.createElement('button')
        containerEditButton.className = 'editButton'
        containerEditButton.textContent = 'Editar'
        containerEdit.appendChild(containerEditButton)

        const containerCancelButton = document.createElement('button')
        containerCancelButton.className = 'cancelButton'
        containerCancelButton.textContent = 'Cancelar'
        containerEdit.appendChild(containerCancelButton)

        //colocar nova janela do editar dentro da li

        li.appendChild(containerEdit)



        //adicionar um event listerner para cada li criada

        li.addEventListener('click', function(){
            
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

        //adicionar evento de click na ul inteira

        ul.addEventListener('click', function(e){
            console.log(e.target)
            if(e.target.className === 'fas fa-edit'){
                console.log('botão de editar')
            }else if(e.target.className === 'fas fa-trash-alt'){
                console.log('botão de deletar')
            }else if(e.target.className === 'button-check'){
                console.log('botão de checar')
            }
        })
        
    
})()