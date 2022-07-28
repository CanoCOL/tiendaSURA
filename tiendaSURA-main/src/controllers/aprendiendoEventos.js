let etiquetaBoton = document.getElementById("boton")

//Pasos para detectar eventos
etiquetaBoton.addEventListener("click", function(){
    console.log("Estoy haciendo click sapo")
    let etiquetaTitulo=document.getElementById("titulo")
    etiquetaTitulo.textContent="Hola soy Miguel"
    let etiquetaMensaje=document.getElementById("mensaje")
    etiquetaMensaje.textContent="Mentiris <3"
    etiquetaMensaje.classList.add("text-danger")
    let etiquetaGuaro=document.getElementById("guaro")
    etiquetaGuaro.src="https://firebasestorage.googleapis.com/v0/b/tiendasuramc.appspot.com/o/Aguardiente.jpg?alt=media&token=d8c66d48-7406-4c9e-904a-62cb87f1e4a1"
})