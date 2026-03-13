 // JavaScript para el puzle
 //he usado  sistema drag and drop del navegador, para arrastar y
 // dejar la imagen, usando el data-id para no ser repetitivo con
 //  los id
 
 const piezas = document.querySelectorAll('.pieza');
        const huecos = document.querySelectorAll('.hueco');
        const tablero = document.getElementById('tablero');

        let piezaSeleccionada = null;

        piezas.forEach(pieza => {
            pieza.addEventListener('dragstart', (e) => {
                piezaSeleccionada = pieza;//guardamos la referencia de la pieza que se esta arrastrando
            });
        });
        huecos.forEach(hueco => {
            hueco.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
        
        hueco.addEventListener('drop', (e) => {
            e.preventDefault();
            const idPieza = piezaSeleccionada.getAttribute('data-id');
            const idHueco = hueco.getAttribute('data-id');
            //comparamos id del la pieza con el hueco
            if (idPieza === idHueco) {
                hueco.innerHTML = "";
                hueco.appendChild(piezaSeleccionada);
                piezaSeleccionada.style.width= "100%";
                piezaSeleccionada.style.height= "100%";
                piezaSeleccionada.draggable= false;
                piezaSeleccionada.classList.add('encajada');//bloqueamos la pieza para que no se pueda mover y añadimos una clase para marcarla como encajada

                victoria();
            }else{//si no coinciden mostramos un mensaje de error
                alert("esta pieza no va ahi");
            }
        });
    });
// un contador de votos utilizando textContent para mostrar el numero de votos,
//  y un evento click para incrementar el contador cada vez que se pulse el boton votar
    const btn= document.getElementById('votar');
    const contador = document.getElementById('contador');
    let votos = 0;
    btn.addEventListener('click', () => {
        votos++;
        contador.textContent = votos;
    });