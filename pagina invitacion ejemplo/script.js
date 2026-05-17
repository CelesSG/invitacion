const objetivo = new Date("2026-12-20T00:00:00");
setInterval(actualizarCuenta, 1000);
actualizarCuenta();
        
function actualizarCuenta(){
    const ahora = new Date();
    const diferencia = objetivo - ahora;

    if (diferencia <= 0) {
        objetivo = new Date(ahora.getFullYear() + 1, 11, 20);
    }
    
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
            
    document.getElementById("dias").innerHTML = `${dias}`;
    document.getElementById("horas").innerHTML = `${horas}`;
    document.getElementById("minutos").innerHTML = `${minutos}`;
    document.getElementById("segundos").innerHTML = `${segundos}`;
}

const observando = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('bounce-in');
        }
    });
});

document.querySelectorAll('.icono_fiesta').forEach(el => observando.observe(el));

const observando2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('deslizarse-arriba');
            observando2.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.texto_fiesta').forEach(el => observando2.observe(el));

function hacerRegalo(){
    document.getElementById("datos").style.display = "flex";
}

function cerrarRegalo(){
    document.getElementById("datos").style.display = "none";
}

const audio = document.getElementById("audio");

function playAudio(){
    document.getElementById("btnPlay").style.display = "none";
    document.getElementById("btnPausa").style.display = "flex";
    audio.play();
}

function pauseAudio(){
    document.getElementById("btnPlay").style.display = "flex";
    document.getElementById("btnPausa").style.display = "none";
    audio.pause();
}
