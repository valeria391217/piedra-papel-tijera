// Selecciona elementos del DOM y los almacena en variables
const seccionBatalla = document.getElementById('campo-batalla'); // Elemento que contiene la batalla
const msjBatalla = document.getElementById('msj-batalla'); // Mensaje de la batalla
const imgAtaqueJugador = document.getElementById('img-ataque-jugador'); // Imagen del ataque del jugador
const imgAtaquePc = document.getElementById('img-ataque-pc'); // Imagen del ataque de la PC
const btnRock = document.getElementById('btn-Rock'); // Botón para seleccionar "Rock"
const btnPaper = document.getElementById('btn-Paper'); // Botón para seleccionar "Paper"
const btnScissor = document.getElementById('btn-Scissor'); // Botón para seleccionar "Scissor"

// Variables para almacenar las selecciones del jugador y de la PC, así como las imágenes correspondientes
let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;

// Array de objetos que contiene nombres y URLs de imágenes correspondientes a las opciones (Rock, Paper, Scissor)
const imagenes = [
    {
        name: "Rock",
        url: "assets/Rock.PNG"
    },
    {
        name: "Paper",
        url: "assets/Paper.PNG"
    },
    {
        name: "Scissor",
        url: "assets/Scissor.PNG"
    }
];

// Función para ocultar la sección de la batalla al inicio
function iniciar() {
    seccionBatalla.style.display = 'none';
}

// Escucha de eventos en los botones para la selección del jugador y activa la función opPc()
btnRock.addEventListener('click', function() {
    opcionJugador = "Rock";
    opPc();
});

btnPaper.addEventListener('click', function() {
    opcionJugador = "Paper";
    opPc();
});

btnScissor.addEventListener('click', function() {
    opcionJugador = "Scissor";
    opPc();
});

// Función que elige aleatoriamente la opción de la PC y llama a la función batalla()
function opPc() {
    var aleatorio = nAleatorio();

    if (aleatorio === 0) {
        opcionPc = "Rock";
    } else if (aleatorio === 1) {
        opcionPc = "Paper";
    } else if (aleatorio === 2) {
        opcionPc = "Scissor";
    }

    batalla();
}

// Función que determina el resultado de la batalla y llama a la función addImagenes()
function batalla() {
    if (opcionJugador === opcionPc) {
        msjBatalla.innerHTML = "Tie";
    } else if (opcionJugador === "Rock" && opcionPc === "Scissor") {
        msjBatalla.innerHTML = "You Won!";
    } else if (opcionJugador === "Paper" && opcionPc === "Rock") {
        msjBatalla.innerHTML = "You Won!";
    } else if (opcionJugador === "Scissor" && opcionPc === "Paper") {
        msjBatalla.innerHTML = "You Won!";
    } else {
        msjBatalla.innerHTML = "You Lost :(";
    }

    addImagenes();
}

// Función que genera un número aleatorio entre 0 y 2
function nAleatorio() {
    let n = Math.floor(Math.random() * 3);
    return n;
}

// Función para mostrar las imágenes seleccionadas por el jugador y la PC
function addImagenes() {
    for (let i = 0; i < imagenes.length; i++) {
        if (opcionJugador === imagenes[i].name) {
            imgJugador = imagenes[i].url;
            var inserta = `<h1 class="user">User</h1> <img class="img-batalla" src=${imgJugador} alt="OptionSelectedByPlayer">`;
            imgAtaqueJugador.innerHTML = inserta;
        }

        if (opcionPc === imagenes[i].name) {
            imgPc = imagenes[i].url;
            var inserta = `<h1 class="machine">Machine</h1> <img class="img-batalla" src=${imgPc} alt="OptionSelectedByMachine">`;
            imgAtaquePc.innerHTML = inserta;
        }
    }

    seccionBatalla.style.display = 'flex';
}

// Evento que se dispara al cargar la página, ocultando inicialmente la sección de la batalla
window.addEventListener('load', iniciar);