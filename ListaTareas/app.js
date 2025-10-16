const parrafo = document.getElementById("parrafo");
const Guardar = document.getElementById("Guardar");
const tarea = document.getElementById("tareas");

function GuardarTarea(){
    const tarea = tareas.value.trim();
    if(tarea === ""){
        parrafo.innerHTML = "<p>Ingresa una tarea, no es valio guardar nada</p>";
    }else{
        parrafo.innerHTML = "<p>Tarea Guardada correctamente</p>";
    }

}

if(Guardar){
    Guardar.addEventListener("click", GuardarTarea);
}