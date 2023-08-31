let slideIndex = 1;
let slides = document.getElementsByClassName("item");
let interval;

showSlides(slideIndex);
startInterval();

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function startInterval() {
    interval = setInterval(nextSlide, 5000);
}

function stopInterval() {
    clearInterval(interval);
}

for (let slide of slides) {
    slide.addEventListener("click", function() {
        stopInterval();
    });
}




window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var offerButton = document.querySelector('.offer__btn');
  
    if (scrollPosition >= 60 && window.innerWidth <= 576) {
      offerButton.classList.add('sticky');
    } else {
      offerButton.classList.remove('sticky');
    }
  });