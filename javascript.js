/* NAVBAR JS */
window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 700) nav.className = ''; else nav.className = 'scroll';
};


/* SLIDESHOW JS */
/*code from W3 schools */
/*this code sets the order of items in the slideshow, runs if statements and for loops so users can scroll through  */
let slideNumber = 1;
showSlides(slideNumber);

function plusSlides(n) {
  showSlides(slideNumber += n);
}

function currentSlide(n) {
  showSlides(slideNumber = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("testiMony");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideNumber-1].style.display = "block";
  dots[slideNumber-1].className += " active";
}
