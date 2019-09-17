
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
            CHECKBOX.type = 'checkbox';

            NEW_LI.textContent = todo.title;

            TODO_LIST.appendChild(NEW_LI);
            NEW_LI.appendChild(CHECKBOX);
        });

    }

    ADD_TODO_FORM.addEventListener('submit', e => {
        e.preventDefault();
        createNewTodo();
    })

    renderUI();
}


window.onload = () => onReady();

 // const addToDoForm = document.getElementById('addToDoForm');
    // const newToDoText = document.getElementById('newToDoText');
    // const toDoList = document.getElementById('toDoList');


    // addToDoForm.addEventListener('submit', e => {
    //     e.preventDefault();

    //     let title = newToDoText.value;
    //     let newLi = document.createElement('li');
    //     let checkbox = document.createElement('input');

    //     checkbox.type = 'checkbox';

    //     newLi.textContent = title
    //     newLi.appendChild(checkbox)
    //     toDoList.appendChild(newLi);
    //     newToDoText.value = '';
    // })