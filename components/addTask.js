import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js"

export const addTask = (event) => {
    const list = document.querySelector("[data-list]");
    const task= createTask(event)
    list.appendChild(task);
}



const createTask = (event)=>{    
    event.preventDefault();
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(taskList);
    const input= document.querySelector("[data-form-input]");
    const calendar= document.querySelector("[data-form-date]");
    
    const value = input.value;
    const date = calendar.value;    
    const dateFormat= moment(date).format("DD/MM/YYYY");
    console.log(dateFormat)
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";

    

    const taskContent = document.createElement('div');
    console.log(value, dateFormat)
    const taskObjt = {
        value: value,
        dateFormat: dateFormat
    }   

    taskList.push(taskObjt);

    localStorage.setItem("tasks", JSON.stringify(taskList))


    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task")
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    //task.innerHTML = content; 
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);  
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
    
}