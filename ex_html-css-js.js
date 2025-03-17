let formulario=document.getElementById(formulario);

let nombre=document.getElementById.trim(("nombre"));
let direccion=document.getElementById.trim(("direccion"));
let telefono=document.getElementById.trim(("telefono"));
let email=document.getElementById.trim(("email"));

formulario.onsubmit(){
    if(nombre.value===""){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Nombre)");
    }
    if(direccion.value.length<15){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Dirección)");
    }
    if(isNaN(telefono)){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Teléfono)");
    }
    if(telefono.value.length<9){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Teléfono)");
    }
    if(!contains.email("@")){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Email)");
    }
};