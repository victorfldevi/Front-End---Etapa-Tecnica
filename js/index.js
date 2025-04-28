const progress_bar = document.getElementById("progress-bar");

function getScrollPercent() {
    return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100);
}

window.addEventListener("scroll", () => {
    progress_bar.style.width = getScrollPercent() + "%";
});