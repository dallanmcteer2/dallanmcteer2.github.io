const stats = document.querySelectorAll(".driver-stats-grid");
const statsTitle = document.querySelectorAll(".driver-title")
const btns = document.querySelectorAll(".stats-menu");

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => handleClick(e, index));
});

function handleClick(e, index) {
    stats.forEach((stat) => {
        stat.classList.add("hide-main");
    });
    statsTitle.forEach((stat) => {
        stat.classList.add("hide-main");
    })
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    stats[index].classList.remove("hide-main");
    statsTitle[index].classList.remove("hide-main");
    btns[index].classList.add("active");
}