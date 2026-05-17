const overlay = document.getElementById("imagen");
const fotoDetalle = document.getElementById("foto-detalle");

function manejarClickFoto(foto) {
    document.getElementById("imagen").style.display = "flex";

    const imagenGrande = document.getElementById("foto-detalle");
    imagenGrande.src = foto.src;

    const boton = document.getElementById("descargar");
    boton.onclick = () => descargarImagen(foto.src);
}

async function descargarImagen(url) {
    document.getElementById("imagen").style.display = "flex";

    const imagenGrande = document.getElementById("foto-detalle");
    imagenGrande.src = foto.src;

    const boton = document.getElementById("descargar");
    boton.onclick = () => {
        const a = document.createElement("a");
        a.href = foto.src;
        a.download = foto.src.split("/").pop();
        a.click();
    };
}

function cerrar(){
    document.getElementById("imagen").style.display = "none";
}

overlay.addEventListener("click", () => {
    cerrar();
});

fotoDetalle.addEventListener("click", (e) => {
    e.stopPropagation();
});

function alerta(){
    alert("Esta función no está disponible en esta demostración");
}