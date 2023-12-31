function updateTaskStatus(taskIndex, status, tasksLocal) {
  tasksLocal[taskIndex - 1].completed = status;
  localStorage.setItem('tasks', JSON.stringify(tasksLocal));
}

function clearCompletedTasks(tasksLocal) {
  tasksLocal = tasksLocal.filter((task) => !task.completed);

  // Reassign correct indexes after deletion
  tasksLocal.forEach((_task, index) => {
    _task.index = index + 1;
  });

  localStorage.setItem('tasks', JSON.stringify(tasksLocal));
  document.location.reload();
}

export { updateTaskStatus, clearCompletedTasks };
