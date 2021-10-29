(function(){

    const form = document.getElementById('todo-add')
    const tarefa = document.getElementById('item-input')

    //armazenar ul para colocar a li dentro
    const ul = document.getElementById('todo-list')
    //criar uma variavel li
    const li = document.getElementsByClassName('todo-item')

    const lis=ul.getElementsByTagName('li')

    //função para adicionar li dentro da ul

    function adicionarTarefa(tarefa){

        
        
        const li = document.createElement('li')
        li.className = 'todo-item'

        //criando li e p e colocando as classes
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

         adicionarTarefa(tarefa.value)
         tarefa.value = ''
         tarefa.focus()
         
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

            //selecionar tarefas de editar, deletar e checar
            let currentLi = e.target
            while(currentLi.nodeName !== 'LI'){
                currentLi = currentLi.parentElement
            }
            console.log(currentLi)

            const indexAtualLi = [...lis].indexOf(currentLi)
            console.log(indexAtualLi)

            //remover tarefa
            if(e.target.className === 'fas fa-trash-alt'){
            
            currentLi.parentElement.removeChild(currentLi)
            }
            //abrir tela editar
            if(e.target.className === 'fas fa-edit'){
            const editContainer = currentLi.querySelector('.editContainer')
            editContainer.style.display = 'flex'
            //aula 145 - 4 minutos
            }

            //campo editar
            

            if(e.target.className === 'editButton'){

            let textoDigitado = currentLi.querySelector('.editInput').value
            
            const editContainer = currentLi.querySelector('.editContainer')
            
            //recuperar valor digitado e colocar novo valor no lugar
            
            let valor = document.getElementsByClassName('task-name')[indexAtualLi]

            valor.innerText = textoDigitado
            //fechar campo editar
            editContainer.style.display = "none"
  
            }

            //cancelar edição

            if(e.target.className === 'cancelButton'){
            
                const editContainer = currentLi.querySelector('.editContainer')
                editContainer.style.display = "none"
                let valor = document.getElementsByClassName('task-name')[indexAtualLi]
                //quando apertar no 
                currentLi.querySelector('.editInput').value = valor.innerHTML
                

            }
            
        })
        
    
})()