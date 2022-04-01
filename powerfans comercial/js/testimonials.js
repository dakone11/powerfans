let slider = document.querySelector ('.testimonial');
let sliderIndividual = document.querySelectorAll('.slider-testimonial');
let contador=1;
let tamañoWidth = sliderIndividual[0].clientWidth;
let intervalo = 1000;

setInterval(function tiempo(){
    slides();
},intervalo);

function slides () {
    slider.style.transform = 'translate ('+ (- tamañoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++;
    if (contador === sliderIndividual.length) {
        contador = 0;
setTimeout(function() {
    slider.style.transform = 'translate (0px)';
    slider.style.transition = 'translate 0s)';

}, intervalo)
    }

} 
