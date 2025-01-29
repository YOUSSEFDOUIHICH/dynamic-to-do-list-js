document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        const taskText= taskInput.value.trim();
        if(taskText === ""){

            alert('Please enter a task')
        }else{
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            const removeButton = document.createElement('button');
            removeButton.textContent = 'remove';
            listItem.appendChild(removeButton);
            removeButton.onclick = () => {
                taskList.removeChild(listItem);
              };
        }   
    }
    addButton.addEventListener('click',addTask);








})