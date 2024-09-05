// Globla Var

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbmailDom = document.querySelector(".carousel .thumbmail");

nextDom.addEventListener("click", () => {
  showSlider("next");
});

prevDom.addEventListener("click", () => {
  showSlider("prevt");
});

let TimeRunning = 3000;
let TimeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, TimeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbmail = document.querySelectorAll(".carousel .thumbmail .item");
  if (type == "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbmailDom.appendChild(itemThumbmail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbmailDom.prepend(itemThumbmail[positionLastItem]);
    carouselDom.classList.add(prev);
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, TimeRunning);

  clearTimeout(runAutoRun);

  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, TimeAutoNext);
}
