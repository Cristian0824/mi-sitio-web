function aceptar(){
    open("ventana.html","DisplayWindow","width=600,height=800")
    /* correo=document.emergente.inputEmail4.value;
    telefono=document.emergente.inputtelefono.value;
    alert("Tus datos Registrados son :\nEmail     :"+correo+
    "\nTelefono:"+telefono) */
    
    }

 function aceptar2(){
    correo=document.emergente.inputEmail4.value;
    telefono=document.emergente.inputtelefono.value;
    alert("¡¡¡¡BIENVENIDO a nuestra pagina!!!!\nTus datos Registrados son :\nEmail     :"  +correo+
    "\nTelefono:"    +telefono)
    close("ventana.html","DisplayWindow","width=600,height=800")
} 
