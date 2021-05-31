import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");

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
    principal.append(senyorElemento);
}