//Pasos para controlar una etiqueta desde JS
//1.Controlando el contenido:
let etiquetaTitulo = document.getElementById("titulo")
let etiquetaFoto = document.getElementById("foto")
console.log(etiquetaTitulo)

//1.1 Manipulando el texto de la etiqueta(elemnto)
etiquetaTitulo.textContent = "Jefe, usted es como mi padre"


//1.2 Manipulando el Src
etiquetaFoto.src = "https://th.bing.com/th/id/R.0a22e5198234ae4405482eb5c73811d2?rik=TZ9ehxaTC%2f2PPA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNemo-PNG-HD-Image.png&ehk=NvbPysailGbVl16t7Oq4XCgyGXEn%2fJhkwBeGQYMbLU0%3d&risl=&pid=ImgRaw&r=0"

//2.0 Controlando el Diseño
let etiquetaParrafo = document.getElementById("parrafo")

etiquetaParrafo.textContent = "El aviador cuenta que una vez, cuando era un niño, hizo un dibujo de una boa que digería a un elefante; sin embargo, todos los adultos que veían el dibujo lo interpretaban erróneamente como un sombrero. Cuando el aviador trata de corregir esta confusión, se le aconseja que deje de lado los dibujos y se dedique a algo más productivo. El aviador entonces se lamenta de la poca comprensión que tienen los adultos por la creatividad."

//2.1 Agregando un estilo(class)
etiquetaTitulo.classList.add("text-center")
etiquetaFoto.classList.add("d-block", "mx-auto", "bg-primary")
etiquetaParrafo.classList.add("text-danger", "fs-1", "text-center" )

//2.2 Quitar-eliminar un estilo
etiquetaParrafo.classList.remove("text-danger")



