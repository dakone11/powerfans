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
  