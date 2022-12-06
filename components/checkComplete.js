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
export default checkComplete;