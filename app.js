
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
            const LABEL = document.createElement('label');
            const TEXTFIELD = document.querySelector('.mdl-js-textfield')
            
            NEW_LI.textContent = todo.title;
            NEW_LI.classList.add('mdl-list__item')
            NEW_LI.textContent = todo.title;
            CHECKBOX.type = 'checkbox';
            CHECKBOX.classList.add('mdl-checkbox__input');
            CHECKBOX.checked = todo.checked;
            LABEL.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect');
            TEXTFIELD.classList.remove('is-dirty')
            DELETE_BTN.textContent = 'Delete'
            DELETE_BTN.classList.add('mdl-button', 'mdl-js-button')
            
            
            CHECKBOX.addEventListener('click', () => {
                todo.checked = !todo.checked
                updateLocalStorage();
            })
            
            DELETE_BTN.addEventListener('click', () => {
                toDos = toDos.filter(obj => obj.id != todo.id)
                updateLocalStorage();
                renderUI();
            })

            LABEL.appendChild(CHECKBOX)
            NEW_LI.appendChild(LABEL);
            NEW_LI.appendChild(DELETE_BTN);
            TODO_LIST.appendChild(NEW_LI);
            componentHandler.upgradeDom();
            updateLocalStorage();        
        });
    }   

    function updateLocalStorage() {
        localStorage.setItem('storedToDos', JSON.stringify(toDos))
    }

    ADD_TODO_FORM.addEventListener('submit', e => {
        e.preventDefault();
        createNewTodo(); 
    })
    
    renderUI();
}

window.onload = () => onReady();
