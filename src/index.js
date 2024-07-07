let form =document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("createTaskForm")
    createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target.newTaskDescription.value);
createTaskForm.reset()
  })
});
function handleToDo(todo) {
  let p = document.createElement('p')
  p.textContent = `${todo} `
  tasks.appendChild(p)
  let btn = document.createElement('button')
  btn.addEventListener('click',deleteTask)
  btn.textContent = 'x'
  p.appendChild(btn)
  

}
function deleteTask(e) {
  e.target.parentNode.remove()
 }
 
  

  
  
  

