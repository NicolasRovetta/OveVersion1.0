/*SLIDER DE PROYECTOS*/
let slideIndex = 1; // Inicializa la variable slideIndex con el valor 1.

document.addEventListener("DOMContentLoaded", () => showSlides(slideIndex));
// Espera a que el DOM esté completamente cargado y luego llama a la función showSlides con slideIndex como argumento.

function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Esta función aumenta o disminuye slideIndex según el valor de n y luego llama a showSlides.

function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Esta función establece slideIndex en el valor de n y luego llama a showSlides.

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;
  // Comprueba si slideIndex está fuera de los límites y lo ajusta si es necesario.

  Array.from(slides).forEach((slide) => slide.style.display = "none");
  Array.from(dots).forEach((dot) => dot.classList.remove("active"));
  // Oculta todos los slides y elimina la clase "active" de todos los puntos.

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  // Muestra el slide actual y marca el punto correspondiente como "active".
}

