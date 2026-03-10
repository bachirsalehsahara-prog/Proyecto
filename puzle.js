 const piezas = document.querySelectorAll('.pieza');
        const huecos = document.querySelectorAll('.hueco');
        const tablero = document.getElementById('tablero');

        let piezaSeleccionada = null;

        piezas.forEach(pieza => {
            pieza.addEventListener('dragstart', (e) => {
                piezaSeleccionada = pieza;
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
            if (idPieza === idHueco) {
                hueco.innerHTML = "";
                hueco.appendChild(piezaSeleccionada);
                piezaSeleccionada.style.width= "100%";
                piezaSeleccionada.style.height= "100%";
                piezaSeleccionada.draggable= false;
                piezaSeleccionada.classList.add('encajada');

                victoria();
            }else{
                alert("esta pieza no va ahi");
            }
        });
    });
    