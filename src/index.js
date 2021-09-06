document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const newTask = document.getElementById('create-task-form')
const toDoList = document.getElementById('tasks')

newTask.addEventListener('submit', () => {
  const newText = document.createElement('li')
  const textInput = document.getElementById('new-task-description')
  newText.innerText = textInput
  toDoList.append(newText)
  event.preventDefault()
})