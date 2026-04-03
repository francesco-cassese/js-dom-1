'use strict';

// --- Collego gli elementi html ---

const immagineLampadina = document.querySelector('.container-img');
const interruttoreLuce = document.querySelector('#switch');
const statoInterruttore = document.querySelector('.title-main');
const commentoInterruttore = document.querySelector('.txt-main');
const frasiDinamiche = document.querySelector('.text-main');
const wrapper = document.querySelector('.wrapper');

// --- Variabili ---
const lampadinaAccesa = '<img src="./img/yellow_lamp.png" alt="lampadina accesa" class="img-lampadina">';
const lampadinaSpenta = '<img src="./img/white_lamp.png" alt="lampadina accesa" class="img-lampadina">';
let luceAccesa = false;

// --- Funzioni ---

// --- Funzione lampadina accesa ---
function setStatoAcceso() {
    immagineLampadina.innerHTML = lampadinaAccesa;                                                      //Cambio immagine
    statoInterruttore.textContent = 'Interruttore ACCESO';                                              //Cambio stato interruttore
    commentoInterruttore.textContent = 'HAI VISTO? Adesso ricordati di spegnerla prima di andare via';  //Cambio frase dinamica
    wrapper.classList.add('is-on');                                                                     //Quando è accesa aggiungo l'utility is on
}

// --- Funzione lampadina spenta ---
function setStatospento() {
    immagineLampadina.innerHTML = lampadinaSpenta;
    statoInterruttore.textContent = 'Interruttore SPENTO';
    commentoInterruttore.textContent = 'Clicca qui e guarda la magia';
    wrapper.classList.remove('is-on');
}

// Funzione che mi gestisce l'interruttore
function gestisciInterruttore() {
    if (luceAccesa === false) {            //Quando la variabile luce è in stato "false" (Valore default dichiarato in precendeza)
        luceAccesa = true;                 // Trasformala in Vero
        setStatoAcceso();                  // Ed esegui la funzione dello stato acceso
    } else {
        luceAccesa = false;                // Altrimenti falla ritornare in "false" 
        setStatospento();                  // ed esegui la funzione dello stato spento
    }
}

setStatospento();                          // Richiamo la funzione che parta al primo accesso nella pagina 

// --- Eventi ---

interruttoreLuce.addEventListener('click', gestisciInterruttore); // Quando clicco sul bottone esegui la funzione gestisci interruttore.
