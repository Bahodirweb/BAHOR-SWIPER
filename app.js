const sliderImg = document.querySelectorAll(".slider_img");
const slider = document.querySelector(".slider");
btnLeft = document.querySelector(".btn_left");
btnRight = document.querySelector(".btn_right");

let n = 0;

function slide() {
  if (n>=sliderImg.length) {
    n = 0;
  }
  if (n<0) {
    n =sliderImg.length - 1;
  }
  slider.style.transform = `translateX(${-n * 1000}px)`;
}

btnLeft.addEventListener("click", () => {
  n--;
  slide();
});

btnRight.addEventListener("click", () => {
  n++;
  slide();
});
