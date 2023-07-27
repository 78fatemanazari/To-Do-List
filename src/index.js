import _ from 'lodash';
import './style.css';

const tasks = [
    {
      description: "Buy groceries",
      completed: false,
      index: 1,
    },
    {
      description: "Clean the house",
      completed: true,
      index: 2,
    },
    {
      description: "Pay bills",
      completed: false,
      index: 3,
    },
  ];
  
  function renderTasks() {
    const listsContainer = document.getElementById("lists");
  
    listsContainer.innerHTML = "";
  
    const sortedTasks = tasks.slice().sort((a, b) => a.index - b.index);
  
    sortedTasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.classList.add("tasks");
      listItem.style.listStyle= "none";

      const checkbox = document.createElement("input");
      checkbox.classList.add("checked");
      checkbox.type = "checkbox";

      const listName = document.createElement('span');
      listName.classList.add('task-name');
      listName.textContent = task.description;
       
      const threedot = document.createElement('span');
      threedot.classList.add('three-dot');
      threedot.innerHTML = '⋮';

      const trashIcon = document.createElement('span');
      trashIcon.classList.add('trash-icon');
      trashIcon.innerHTML = '&#128465;';

      listItem.appendChild(checkbox);
      listItem.appendChild(listName);
      listItem.appendChild(threedot);
      listItem.appendChild(trashIcon);
      listsContainer.appendChild(listItem);
    });
  }
  
  window.addEventListener("load", renderTasks);
  

      