let newBoton=document.getElementById("boton")


newBoton.addEventListener("click", function(){
    let newNombre = document.getElementById("nombre").value
    let neSaludo = document.getElementById("saludo")
    neSaludo.textContent = "hola " + newNombre + " como estas"


})
    

