const input = document.getElementById('add-task');
const button = document.querySelector('button');
const toDoList = document.getElementById('to-do-list');

function addTask(){
  if (input.value){
    // Create task
    let newTask = document.createElement('div');
    newTask.classList.add('task');
       
    // Text entered by user
    let text = document.createElement('p');
    text.innerText = input.value;
    newTask.appendChild(text);

    // Create and add icon container
    let icons = document.createElement('div');
    icons.classList.add('icons');
    newTask.appendChild(icons);

    // Icons
    let complete = document.createElement('i');
    complete.classList.add('bi', 'bi-check-circle-fill','complete-icon');
    complete.addEventListener('click', taskComplete);

    let eliminate = document.createElement('i');
    eliminate.classList.add('bi', 'bi-trash3-fill','eliminate-icon');
    eliminate.addEventListener('click', taskEliminate);

    icons.append(complete, eliminate);

    // Add task to the list
    toDoList.appendChild(newTask);

    // Delete current input
    input.value = "";
  }
  
  else{
    alert('Please add a task')
  }
}

function taskComplete(e){
  // Add 'complete' class
  let task = e.target.parentNode.parentNode;
  task.classList.toggle('complete');
  
  // Create an array of the icons and add 'change-color' class
  let changeColorIcons = Array.from(e.target.parentNode.children);
  changeColorIcons.forEach(icon => {
    icon.classList.toggle('change-color-icon');
  });
}

function taskEliminate(e){
  let task = e.target.parentNode.parentNode;
  task.remove();
}

button.addEventListener('click', addTask);

// Add an event to the 'Enter' key
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){
    addTask();
  }
})

