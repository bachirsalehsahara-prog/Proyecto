const imagenes= document.querySelectorAll(".ImagenTexto");
const texto= document.getElementById("textoHover");

imagenes.forEach(imagen=> {
   imagen.addEventListener("mouseenter", ()=> {
    texto.style.display= "block";
   });
   imagen.addEventListener("mouseleave", ()=> {
    texto.style.display= "none";
   });
   imagen.addEventListener("mousemove", (e)=> {
    texto.style.left= (e.pageX + 15) + "px";
        texto.style.top= e.pageY + "px";

   });
});
