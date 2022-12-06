const btn= document.querySelector("[data-form-btn]");

const createTask = (event)=>{
    event.preventDefault();
    const input= document.querySelector("[data-form-input]");
    const value = input.value
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = ""

    const taskContent = document.createElement('div');        
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task")
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    //task.innerHTML = content; 
    task.appendChild(taskContent);  
    task.appendChild(deleteIcon());
    list.appendChild(task);
}
btn.addEventListener("click", createTask);

const checkComplete = ()=>{
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i 
}
//creo una función para que el icono del check cuando le haga click cambie
const completeTask =(event)=>{
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon")
    element.classList.toggle("far")
    
}
const deleteIcon = (event)=>{
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click", deleteTask)
    return i
}
const deleteTask = (event)=>{
    const element= event.target.parentElement;
    element.remove()

}


