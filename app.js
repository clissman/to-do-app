
function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    const textfield = document.querySelector('.mdl-js-textfield')

    addToDoForm.addEventListener('submit', e => {
        e.preventDefault();
        
        
        let title = newToDoText.value;
        
        let newLi = document.createElement('li');
        newLi.classList.add('mdl-list__item')
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('mdl-checkbox__input');

        let label = document.createElement('label');
        label.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect');
        label.appendChild(checkbox)

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('mdl-button', 'mdl-js-button')
        
        deleteBtn.addEventListener('click', (e) => e.target.parentNode.remove())

        newLi.textContent = title
        newLi.appendChild(label)
        newLi.appendChild(deleteBtn)
        toDoList.appendChild(newLi);

        textfield.classList.remove('is-dirty')
        newToDoText.value = ''
    })
}

window.onload = () => onReady();


