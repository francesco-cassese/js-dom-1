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

function setStatoAcceso() {
    immagineLampadina.innerHTML = lampadinaAccesa;
    statoInterruttore.textContent = 'Interruttore ACCESO';
    commentoInterruttore.textContent = 'HAI VISTO? Adesso ricordati di spegnerla prima di andare via';
    wrapper.classList.add('is-on')
}

function setStatospento() {
    immagineLampadina.innerHTML = lampadinaSpenta;
    statoInterruttore.textContent = 'Interruttore SPENTO';
    commentoInterruttore.textContent = 'Clicca qui e guarda la magia';
    wrapper.classList.remove('is-on');
}

function gestisciInterruttore() {
    if (luceAccesa === false) {
        luceAccesa = true;
        setStatoAcceso();
    } else {
        luceAccesa = false;
        setStatospento();
    }
}

// --- Eventi ---
interruttoreLuce.addEventListener('click', gestisciInterruttore);
