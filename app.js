
function onReady() {
    let toDos = [];
    const ADD_TODO_FORM = document.getElementById('addToDoForm');
    let id = 0;
   
    function createNewTodo() {
        const NEW_TODO_TEXT = document.getElementById('newToDoText');
        if (!NEW_TODO_TEXT.value) return;
        
        toDos.push({
            title: NEW_TODO_TEXT.value,
            checked: false,
            id
        });
        
        id++;
        NEW_TODO_TEXT.value = '';
        renderUI();
    }

    function renderUI() {
        const TODO_LIST = document.getElementById('toDoList');

        TODO_LIST.textContent = '';

        toDos.forEach(todo => {
            const NEW_LI = document.createElement('li');
            const CHECKBOX = document.createElement('input')
            const LABEL = document.createElement('label');
            const TEXTFIELD = document.querySelector('.mdl-js-textfield')
            const DELETE_BTN = document.createElement('button')
            
            NEW_LI.textContent = todo.title;
            NEW_LI.classList.add('mdl-list__item')
            NEW_LI.textContent = todo.title;
            CHECKBOX.type = 'checkbox';
            CHECKBOX.classList.add('mdl-checkbox__input');
            LABEL.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect');
            TEXTFIELD.classList.remove('is-dirty')
            DELETE_BTN.textContent = 'Delete'

            CHECKBOX.addEventListener('click', () => {
                toDos[todo.id].checked = !toDos[todo.id].checked
            })
            
            DELETE_BTN.addEventListener('click', () => {
                toDos = toDos.filter(obj => obj.id != todo.id)
                renderUI();
            })

            NEW_LI.appendChild(LABEL);
            LABEL.appendChild(CHECKBOX)
            TODO_LIST.appendChild(NEW_LI);
            NEW_LI.appendChild(DELETE_BTN);
        });
    }

    ADD_TODO_FORM.addEventListener('submit', e => {
        e.preventDefault();
        createNewTodo(); 
    })
    renderUI();
}


window.onload = () => onReady();

