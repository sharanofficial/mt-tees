const linksContainer = document.querySelector(".nav-links");
const navIcon = document.querySelector(".nav-icon");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");
const bottomBtns = document.querySelectorAll(".carousel-btn");

navIcon.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links");
  navIcon.classList.toggle("nav-active");
});

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let count = 0;

prevBtn.addEventListener("click", () => {
  count--;
  carousel();
});
nextBtn.addEventListener("click", () => {
  count++;
  carousel();
});

const carousel = () => {
  if (count === slides.length) {
    count = 0;
  }
  if (count < 0) {
    count = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
  bottomBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  bottomBtns[count].classList.add("active");
};

bottomBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const current = event.target.classList;
    if (current.contains("prev")) {
      count = 0;
      carousel();
    } else if (current.contains("next")) {
      count = 2;
      carousel();
    } else {
      count = 1;
      carousel();
    }
  });
});
