document.addEventListener("DOMContentLoaded", () => {
    
    const galerias = document.querySelectorAll(".galeria");

    galerias.forEach((galeria) => {
        
        const principal = galeria.querySelector(".img-principal");
        const minis = galeria.querySelectorAll(".mini");
        const btnAnt = galeria.querySelector(".anterior");
        const btnSig = galeria.querySelector(".siguiente");
        
        let indiceActual = 0;

        
        function actualizarImagen(indice) {
            if (!minis[indice]) return;
            
            
            principal.src = minis[indice].getAttribute("data-full");
            
            
            minis.forEach(m => m.classList.remove("activa"));
            minis[indice].classList.add("activa");
            indiceActual = indice;
        }

        
        minis.forEach((m, i) => {
            m.addEventListener("click", () => actualizarImagen(i));
        });

        
        if (btnSig) {
            btnSig.addEventListener("click", () => {
                indiceActual = (indiceActual + 1) % minis.length;
                actualizarImagen(indiceActual);
            });
        }

        
        if (btnAnt) {
            btnAnt.addEventListener("click", () => {
                indiceActual = (indiceActual - 1 + minis.length) % minis.length;
                actualizarImagen(indiceActual);
            });
        }
    });
});
