const stats = document.querySelectorAll(".standings-table-box");
const btns = document.querySelectorAll(".championship-menu");

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => handleClick(e, index));
});

function handleClick(e, index) {
    stats.forEach((stat) => {
        stat.classList.add("hide-main");
    });
    btns.forEach((btn) => {
        btn.classList.remove("standings-active");
    });

    stats[index].classList.remove("hide-main");
    btns[index].classList.add("standings-active");
}