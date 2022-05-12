//-------------------------------- FORMULARIO --------------------------------

/* Creo el objeto que va a contener los valores que ingrese por input */
const datos = {
    user: '',
    pass: ''
}; 

/* Obtengo elementos HTML */
const user = document.querySelector('#user');
const pass = document.querySelector('#pass');
const formulario = document.querySelector('.formulario');

/* Guardo valores que ingreso por input en el objeto creado anteriormente */
user.addEventListener('input', function(event){
    datos.user = event.target.value;
    console.log("Usuario: " + event.target.value + " guardado");
});

pass.addEventListener('input', function(event){
    datos.pass = event.target.value;
    console.log("Contraseña: " + event.target.value + " guardada");
});

/* Valido el formulario */
formulario.addEventListener('submit' , function(event){
    event.preventDefault();
    const {user, pass} = datos;

    /* Si el user y pass son admin ambos lanza el mensaje de login correcto */
    if(user === 'admin' && pass === 'admin'){
        console.log("¡Login correcto!");
        mostrarMensaje("¡Login correcto!", true);
        return;
    }
    /* Si el user y pass no son admin ambos lanza el mensaje de datos incorrectos */
    console.log("Usuario o contraseña incorrectos");
    mostrarMensaje("¡Datos incorrectos!", false);
    return;
});

/* Funcion que muestra un cierto tiempo un mensaje */
function mostrarMensaje(mensaje, correcto){
    const respuesta = document.createElement('P');
    respuesta.textContent = mensaje;

    if(correcto){
        respuesta.classList.add('correcto');
    }else{
        respuesta.classList.add('error');
    }

    formulario.appendChild(respuesta);
    setTimeout(() => {
        respuesta.remove();
    }, 2000);
}
