
function onReady() {
    const TODOS = [];
    const ADD_TODO_FORM = document.getElementById('addToDoForm');
   
    function createNewTodo() {
        const NEW_TODO_TEXT = document.getElementById('newToDoText');
        if (!NEW_TODO_TEXT.value) return;
        TODOS.push({
            title: NEW_TODO_TEXT.value,
            checked: false
        });
        NEW_TODO_TEXT.value = '';
        renderUI();
    }

    function renderUI() {
        const TODO_LIST = document.getElementById('toDoList');

        TODO_LIST.textContent = '';

        TODOS.forEach(todo => {
            const NEW_LI = document.createElement('li');
            const CHECKBOX = document.createElement('input')
            const LABEL = document.createElement('label');
            const TEXTFIELD = document.querySelector('.mdl-js-textfield')
            
            CHECKBOX.type = 'checkbox';
            CHECKBOX.classList.add('mdl-checkbox__input');
            NEW_LI.textContent = todo.title;
            NEW_LI.classList.add('mdl-list__item')
            LABEL.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect');
            TEXTFIELD.classList.remove('is-dirty')

            NEW_LI.appendChild(CHECKBOX);
            NEW_LI.appendChild(LABEL);
            LABEL.appendChild(CHECKBOX)
            TODO_LIST.appendChild(NEW_LI);
        });
    }

    ADD_TODO_FORM.addEventListener('submit', e => {
        e.preventDefault();
        createNewTodo(); 
    })
    renderUI();
}


window.onload = () => onReady();

