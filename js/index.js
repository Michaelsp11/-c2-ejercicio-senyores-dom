import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");
let marcados = 0;
for (const { nombre, foto, profesion, estado, twitter, marcado }
    of senyores) {
    const senyorElemento = document
        .querySelector(".senyor-molde")
        .cloneNode(true);
    senyorElemento.classList.remove("senyor-molde");
    const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
    nombreElemento.textContent = nombre;
    const imagen = senyorElemento.querySelector(".avatar > img");
    imagen.src = `img/${foto}`;
    imagen.alt = `${nombre} senyalando`;
    const inicial = senyorElemento.querySelector(".inicial");
    inicial.textContent =
        nombre.toLowerCase().slice(0, 2) === "el" ? nombre.slice(3, 4) : nombre[0];
    const valorProfesion = senyorElemento.querySelector(".valor-profesion");
    valorProfesion.textContent = profesion;
    const valorEstado = senyorElemento.querySelector(".valor-estado");
    valorEstado.textContent = estado;
    const valorTwitter = senyorElemento.querySelector(".valor-twitter");
    valorTwitter.textContent = twitter;
    if (marcado) {
        const icono = senyorElemento.querySelector(".icono");
        imagen.classList.add("marcado");
        icono.classList.add("marcado");
        marcados++;
    }
    principal.append(senyorElemento);
}
document.querySelector(".numero-senyores-marcados").textContent = marcados;