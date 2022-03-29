
//menu
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

















