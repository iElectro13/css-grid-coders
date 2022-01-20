let button = document.getElementById("saludar")
let titulo = document.getElementById("titulo")
let body = document.querySelector(".hola")


body.addEventListener("click", () => {
    titulo.classList.toggle("click")
})
