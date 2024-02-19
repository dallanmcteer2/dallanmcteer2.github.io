const stats = document.querySelectorAll(".results-table-box");
const stats2 = document.querySelectorAll(".session-info-box")
const btns = document.querySelectorAll(".tier-menu");

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => handleClick(e, index));
});

function handleClick(e, index) {
    stats.forEach((stat) => {
        stat.classList.add("hide-main");
    });
    stats2.forEach((stat) => {
        stat.classList.add("hide-main");
    });
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    stats[index].classList.remove("hide-main");
    stats2[index].classList.remove("hide-main");
    btns[index].classList.add("active");
}