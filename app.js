
function onReady() {
    let parsedStorage =JSON.parse(localStorage.getItem('storedToDos')) || null
    let toDos = parsedStorage || []
    let id = localStorage.getItem('id') || 0;
    const ADD_TODO_FORM = document.getElementById('addToDoForm');

    function createNewTodo() {
        const NEW_TODO_TEXT = document.getElementById('newToDoText');
        
        if (!NEW_TODO_TEXT.value) return;
        
        toDos.push({
            title: NEW_TODO_TEXT.value,
            checked: false,
            id
        });
        
        id++;
        localStorage.setItem('id', id)

    
        NEW_TODO_TEXT.value = '';
        renderUI();
    }   

    function renderUI() {
        const TODO_LIST = document.getElementById('toDoList');

        TODO_LIST.textContent = '';

        toDos.forEach(todo => {
            const NEW_LI = document.createElement('li');
            const CHECKBOX = document.createElement('input')
            const DELETE_BTN = document.createElement('button')

            NEW_LI.textContent = todo.title;
            CHECKBOX.type = 'checkbox';
            CHECKBOX.checked = todo.checked;
            DELETE_BTN.textContent = 'Delete'

            CHECKBOX.addEventListener('click', () => {
                todo.checked = !todo.checked
                updateLocalStorage();
            })
            
            DELETE_BTN.addEventListener('click', () => {
                toDos = toDos.filter(obj => obj.id != todo.id)
                updateLocalStorage();
                renderUI();
            })

            TODO_LIST.appendChild(NEW_LI);
            NEW_LI.appendChild(CHECKBOX);
            NEW_LI.appendChild(DELETE_BTN);
            updateLocalStorage();
        });

        function updateLocalStorage() {
            localStorage.setItem('storedToDos', JSON.stringify(toDos))
        }
    }

    ADD_TODO_FORM.addEventListener('submit', e => {
        e.preventDefault();
        createNewTodo();
    })

    renderUI();
}


window.onload = () => onReady();
