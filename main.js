//Selectors
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const buttons = document.querySelector(".buttons");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

//Function on click Previous & Next

function prevSlide(e) {
  if (e.currentTarget.className === "previous") {
    document.querySelector(".slide2").style.display = "none";
    document.querySelector(".slide1").style.display = "flex";
  }
}

function nextSlide(e) {
  if (e.currentTarget.className === "next") {
    document.querySelector(".slide1").style.display = "none";
    document.querySelector(".slide2").style.display = "flex";
  }
}
//add event listeners

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
