let formulario=document.getElementById("formulario");

let nombre=document.getElementById.trim(("nombre"));
let direccion=document.getElementById.trim(("direccion"));
let telefono=document.getElementById.trim(("telefono"));
let email=document.getElementById.trim(("email"));

formulario.onsubmit(){

    if(nombre.value.trim().===" "){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Nombre)");
        return;
    };

    if(direccion.value.trim().length<15){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Dirección)");
        return;
    };

    if(isNaN(telefono)){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Teléfono)");
        return;
    };

    if(telefono.value.trim().length<9){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Teléfono)");
        return;
    };

    if(!email.contains("@")){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Email)");
        return;
    };
}