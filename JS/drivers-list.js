const stats = document.querySelectorAll(".driver-list-container");
const btns = document.querySelectorAll(".drivers-menu");

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => handleClick(e, index));
});

function handleClick(e, index) {
    stats.forEach((stat) => {
        stat.classList.add("hide-main");
    });
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    stats[index].classList.remove("hide-main");
    btns[index].classList.add("active");
}