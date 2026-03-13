const piezas= document.querySelectorAll('.puzzle-pieza');
const huecos= document.querySelectorAll('.puzzle-hueco');
const botonReiniciar= document.getElementById('puzzleReiniciar');

let piezaArrastrada= null;

piezas.forEach((pieza) => {
    pieza.addEventListener("dragstart", () => {
        piezaArrastrada= pieza;
    });
});
// Aqui no sabia como evitar que se pueda arrastrar una pieza a un hueco que ya tiene una pieza, asi que lo he hecho con un if dentro del evento drop de los huecos, si el hueco ya tiene una pieza no se puede soltar otra encima
huecos.forEach((hueco) => {
    hueco.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    hueco.addEventListener("drop", () => {
        if (piezaArrastrada !==null && hueco.children.length === 0) {
            hueco.appendChild(piezaArrastrada);
            comprobarVictoria();
        }
    });
});

const comprobarVictoria = () => {
    let correcto= 0;
    huecos.forEach((hueco) => {
        const pieza= hueco.firstElementChild;
        if (pieza && pieza.dataset.pos === hueco.dataset.hueco) {
            correcto++;
        }
    });
    if (correcto === huecos.length) {
        alert("Felicidades Completado");
    }
};


botonReiniciar.addEventListener("click", () => {
    const contenedor= document.getElementById("piezasSueltas");
    piezas.forEach((pieza) => {
        contenedor.appendChild(pieza);
    });
    huecos.forEach((hueco) => {
        hueco.innerHTML= ""; //esta parte me ha ayudado la ia ya que no sabia como conseguir reiniciar
    });
});