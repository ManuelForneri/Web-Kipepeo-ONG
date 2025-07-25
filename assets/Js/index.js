const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");


burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/*Loading*/
// Este código se encargará de ocultar el loader, el fondo y el texto cuando la página se cargue completamente
window.addEventListener("load", function () {
  // Selecciona el div del loader
  var loaderWrapper = document.querySelector(".loader-wrapper");

  // Selecciona el div del texto de bienvenida
  var welcomeText = document.querySelector(".welcome-text");

  // Cambia el tiempo de espera a, por ejemplo, 3000 milisegundos (3 segundos)
  setTimeout(function () {
    // Oculta el loader, el fondo y el texto de bienvenida
    loaderWrapper.style.opacity = "0";
    welcomeText.style.opacity = "0";

    setTimeout(function () {
      // Elimina el div del loader, el fondo y el texto de bienvenida
      loaderWrapper.style.display = "none";
      welcomeText.style.display = "none";
    }, 1000); // Puedes ajustar el tiempo de animación aquí
  }, 2000); // Cambia este valor al tiempo que desees en milisegundos
});


