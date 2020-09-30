//Selectors
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const buttons = document.querySelector(".buttons");
const slides = document.querySelectorAll(".slide");

//Change slides when button is clicked

// forEach to remove active class (display:none on slides otherwise)

//For loop maybe? If/Else is not very dynamic but works if no more slides are added

//Event Listeners

buttons.addEventListener("click", (e) => {
  console.log(e.target);
  slides.forEach(() => {
    if (slides.classList.contains("active")) {
      slides.classList.remove("active");
    }
  });
});
