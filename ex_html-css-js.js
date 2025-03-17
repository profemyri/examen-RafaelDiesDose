let formulario=document.getElementById("formulario");

let nombre=document.getElementById.trim(("nombre"));
let direccion=document.getElementById.trim(("direccion"));
let telefono=document.getElementById.trim(("telefono"));
let email=document.getElementById.trim(("email"));

formulario.onsubmit();{

    if(nombre.value.trim()===" "){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Nombre)");
        return false;
    };

    if(direccion.value.trim().length<15){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Dirección)");
        return false;
    };

    if(isNaN(telefono)){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Teléfono)");
        return false;
    };

    if(telefono.value.trim().length<9){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Teléfono)");
        return false;
    };

    if(!email.contains("@")){
        alert("Revisa el formulario: algunos campos son incorrectos o están incompletos. (Email)");
        return false;
    };

};

let caracteres=document.getElementById.trim(("caracteres"));

caracteres.oninput;{
    let contador=document.getElementById.trim(("cont"));
    contador.textContent=caracteres.value.length;
};

let boton=document.getElementById("envio");

boton.onmouseover;{
    background-color: #ffffff;
};
