const btn= document.querySelector("[data-form-btn]");

const agregar = (event)=>{
    event.preventDefault();
    const input= document.querySelector("[data-form-input]");
    const value= input.value;
    //ahora hay que volver dinámica la lista de tareas para que vayan apareciendo las cards
    const listaDeTareas= document.querySelector("[data-list]");
    //le agrego la clase o clases que tenga
    listaDeTareas.classList.add("card-list");
    //creo al hijo de lista de tareas
    const tarea= document.createElement("li");
    //le agrego sus clases
    tarea.classList.add("card");
    //limpio el input
    value="";
    //creo el hijo de tarea que es un div sin clase
    const div = document.createElement("div");
    //lo agrego como hijo de tarea
    tarea.appendChild(div);
    //creo los hijos del div (un i y un span)
    const i = document.createElement("i");
    //le agrego sus clases
    i.classList.add("far","fa-check-square", "icon");
    //creo el objeto span
    const nombreDeLaTarea= document.createElement("span");
    //le agrego sus clases
    nombreDeLaTarea.classList.add("task");
    //le agrego el contenido del value
    nombreDeLaTarea.innerText = value;
    //le agrego el hijo al padre
    div.appendChild(nombreDeLaTarea);

    //ahora le agrego a su hijo
    listaDeTareas.appendChild(tarea);

    

}

btn.addEventListener("click", agregar)


