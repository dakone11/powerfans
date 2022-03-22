const $hamBtn = document.querySelector('.ham-btn'),
        $nav = document.querySelector('.nav');

        const openCloseHam = () =>{
            //for Hamburger btn
            if ( $hamBtn.classList.contains("ham-x") ){
                $hamBtn.classList.remove("ham-x");
                $nav.classList.add('hidden')
            }else{
                $hamBtn.classList.add("ham-x");
                $nav.classList.remove('hidden')
            } 
        }
        document.addEventListener('click', e => {
            if( e.target.matches('.ham-btn') || e.target.matches('.ham-btn *')) openCloseHam();
        });








//modal

        var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var wrapper = document.querySelector(".wrapper");
var button = document.querySelector(".button");

function buttonFunction(event){
  event.preventDefault();
  modal.classList.add("is-active");
  button.classList.add("button-modal-showing");
  overlay.classList.add("overlay-modal-showing");
}

function overlayFunction(event){
  event.preventDefault();
  event.stopImmediatePropagation();
  modal.classList.remove("is-active");
  overlay.classList.remove("overlay-modal-showing");
  button.classList.remove("button-modal-showing");
};



//video youtube

// Get the modal
var popup = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("play");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("boton-cerrar")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
}



// animacion scroll

/* Al cargarse la páfina añadimos un listener 
/* al objeto window para obtener información 
/* cada vez que se hace scroll */
window.onload = function () {
  window.addEventListener("scroll", onScroll);
};

/* Comprobamos si el div está dentro de la vista */
function isCrolledIntoView(htmlElement) {
  const rect = htmlElement.getBoundingClientRect();
  const elementTop = rect.top;
  const elementBottom = rect.bottom;
  const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;
  return isVisible;
}

function onScroll() {
  // obtenemos todos los elementos html (divs) que tienen como id image
  const images = document.querySelectorAll('[id="image"]');
  // si no existen hacemos un return para que no ejecute el bucle
  if (!images || images?.length === 0) return;
  images.forEach((imageElement) => {
    const isVisible = isCrolledIntoView(imageElement);
    if (isVisible) {
      // Si el div es visible añadimos al elemento img la clase de animación y eliminamos su propiedad id para que no se vuelva a realizar la animación.
      addAnimationClass(imageElement);
      removeId(imageElement);
    }
  });
}

function addAnimationClass(htmlElement) {
  const nameClass = htmlElement.className;
  // si la clase del elemento img tiene la clase left, añadimos la clase animated-left sino añadimos la clase animated-right
  if (nameClass.includes("left")) {
    htmlElement.classList.add("animated-left");
  } else {
    htmlElement.classList.add("animated-right");
  }
}

/* Eliminamos el atributo id del elemento img */
function removeId(htmlElement) {
  htmlElement.removeAttribute("id");
}


// acordeon//
var elementOld = null;
var openClass = "Accordion__tab--open";

function toggleAccordion(element) {
    content = element.querySelector(".Accordion__tab__content");

    if(elementOld != null){
        elementOld.classList.remove(openClass);
        contentOld = elementOld.querySelector(".Accordion__tab__content");
        contentOld.style.maxHeight = "0px";
    }

    if(elementOld !== element){
        element.classList.add(openClass);
        content.style.maxHeight = content.scrollHeight + "px";
        elementOld = element;
    }else{
        elementOld = null;
    }
}


//contador//

// Date and Time for the countdown to end
const launchTime = new Date("October 16, 2022 00:00:00").getTime();

function countDown() {
    const currentTime = new Date().getTime();
    const timeDifference = launchTime - currentTime;

    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    hours = (hours < 10 && hours > 0) ? "0" + hours : hours;
    minutes = (minutes < 10 && minutes > 0) ? "0" + minutes : minutes;
    seconds = (seconds < 10 && seconds > 0) ? "0" + seconds : seconds;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    setTimeout(countDown, 1000);
}
countDown();














