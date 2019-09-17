
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
            const DELETE_BTN = document.createElement('button')

            CHECKBOX.type = 'checkbox';
            
            NEW_LI.textContent = todo.title;
            DELETE_BTN.textContent = 'Delete'

            CHECKBOX.addEventListener('click', () => {
                toDos[todo.id].checked = !toDos[todo.id].checked
            })
            
            DELETE_BTN.addEventListener('click', () => {
                toDos = toDos.filter(obj => obj.id != todo.id)
                renderUI();
            })

            TODO_LIST.appendChild(NEW_LI);
            NEW_LI.appendChild(CHECKBOX);
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