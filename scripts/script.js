'use strict';

// --- Collego gli elementi html ---

const immagineLampadina = document.querySelector('.container-img');
const interruttoreLuce = document.querySelector('#switch');
const statoInterruttore = document.querySelector('.title-main');
const commentoInterruttore = document.querySelector('.txt-main');
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
        wrapper.style.backgroundColor = 'white';
    } else {

        //SPEGNI
        immagineLampadina.innerHTML = lampadinaSpenta;
        luceAccesa = false;
        statoInterruttore.innerHTML = ('<h3 class="title-main">Interruttore SPENTO</h3>');
        wrapper.style.backgroundColor = 'black';
    }
}

// --- Eventi ---
interruttoreLuce.addEventListener('click', accendiLampadina);
