// This function updates the status (completed: true/false) of a task
function updateTaskStatus(taskIndex, status, tasksLocal) {
    tasksLocal[taskIndex - 1].completed = status;
    localStorage.setItem('tasks', JSON.stringify(tasksLocal));
  }
  
  // This function clears all completed tasks from the list
  function clearCompletedTasks(tasksLocal) {
    tasksLocal = tasksLocal.filter((task) => !task.completed);
    localStorage.setItem('tasks', JSON.stringify(tasksLocal));
    document.location.reload();
  }
  
  export { updateTaskStatus, clearCompletedTasks };
  