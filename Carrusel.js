const imagenPrincipal = document.getElementById("imagenCarrusel");
const miniaturas = document.querySelectorAll(".mini");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

let indiceActual = 0;

const fotos= [
    "Imagenes/fotocarrusel1.jpg",
    "Imagenes/fotocarrusel2.jpg",
    "Imagenes/fotocarrusel3.jpg",
    "Imagenes/fotocarrusel4.jpg",
    "Imagenes/fotocarrusel5.jpg",
    "Imagenes/fotocarrusel6.jpg",
];

const actualizarCarrusel = (indice) => {
    imagenPrincipal.src = fotos[indice];
    miniaturas.forEach((mini) => {
        mini.classList.remove("activa");
    });
    miniaturas[indice].classList.add("activa");
    indiceActual = indice;
};

miniaturas.forEach((mini) => {
    mini.addEventListener("click", () => {
        actualizarCarrusel(parseInt(mini.dataset.indice)); //esto le he preguntado al chat porque me estaba volviendo loco.
    });
});

btnSiguiente.addEventListener("click", () => {
    let nuevoIndice = (indiceActual + 1) % fotos.length;
    actualizarCarrusel(nuevoIndice);
});

btnAnterior.addEventListener("click", () => {
    let nuevoIndice = (indiceActual - 1 + fotos.length) % fotos.length;
    actualizarCarrusel(nuevoIndice);
});
