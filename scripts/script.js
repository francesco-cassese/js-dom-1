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
function accendiLampadina() {
    if (luceAccesa === false) {

        //ACCENDI
        immagineLampadina.innerHTML = lampadinaAccesa;
        luceAccesa = true;
        statoInterruttore.innerHTML = ('<h3 class="title-main">Interruttore ACCESO</h3>');
        commentoInterruttore.innerHTML = ('<p class="txt-main"> HAI VISTO? Adesso ricordati di spegnerla prima di andare via</p>');
        wrapper.style.backgroundColor = 'white';
        frasiDinamiche.style.color = 'black';
    } else {

        //SPEGNI
        immagineLampadina.innerHTML = lampadinaSpenta;
        luceAccesa = false;
        statoInterruttore.innerHTML = ('<h3 class="title-main">Interruttore SPENTO</h3>');
        commentoInterruttore.innerHTML = ('<p class="txt-main">Clicca qui e guarda la magia</p>');
        wrapper.style.backgroundColor = 'black';
        frasiDinamiche.style.color = 'white';
    }
}

// --- Eventi ---
interruttoreLuce.addEventListener('click', accendiLampadina);
