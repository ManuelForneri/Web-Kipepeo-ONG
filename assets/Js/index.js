const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function toggleOptions(optionsId) {
  var options = document.getElementById(optionsId);
  if (options.style.display === "block") {
    options.style.display = "none";
  } else {
    options.style.display = "block";
  }
}
