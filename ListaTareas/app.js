const parrafo = document.getElementById("parrafo");
const Guardar = document.getElementById("Guardar");
const tareas = document.getElementById("tareas"); 

const LOCAL_STORAGE_KEY = "miTareaGuardada";

function GuardarTarea() {
    const tareaTexto = tareas.value.trim();

    if(tareaTexto === ""){
        parrafo.innerHTML = "<p>  Ingresa una tarea, no es válido guardar nada</p>";
    }else{
   
        localStorage.setItem(LOCAL_STORAGE_KEY, tareaTexto);

        parrafo.innerHTML = "<p>  Tarea Guardada correctamente</p>";
      
    }
}

function CargarTarea(){
    const tareaGuardada = localStorage.getItem(LOCAL_STORAGE_KEY);  
    if(tareaGuardada){
        tareas.value = tareaGuardada;
    }   
}
CargarTarea();  



if(Guardar){
    Guardar.addEventListener("click", GuardarTarea);
}
