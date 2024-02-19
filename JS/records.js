const records = document.querySelectorAll(".records-table-box");
const title = document.querySelectorAll(".records-title-container");
const btns = document.querySelectorAll(".records-menu");

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => handleClick(e, index));
});

function handleClick(e, index) {
    records.forEach((stat) => {
        stat.classList.add("hide-main");
    });
    title.forEach((stat) => {
        stat.classList.add("hide-main");
    });
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    records[index].classList.remove("hide-main");
    title[index].classList.remove("hide-main");
    btns[index].classList.add("active");
}

let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.menu-container');

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
}

// Add the event listeners
slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);