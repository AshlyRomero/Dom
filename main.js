let el_cuadro = document.querySelector('.cajita');
let btn_verde = document.querySelector('.bot1');
let btn_rojo = document.querySelector('.bot2');

function cambiar_verde(){
    el_cuadro.innerHTML = `<div class="verde"></div>`
}

function cambiar_rojo(){
    el_cuadro.innerHTML = `<div class="rojo"></div>`
}

btn_verde.addEventListener('click', cambiar_verde);
btn_rojo.addEventListener('click', cambiar_rojo);