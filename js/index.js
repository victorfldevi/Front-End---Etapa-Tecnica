const progress_bar = document.getElementById("progress-bar");
const return_btn = document.getElementById("return-btn");

function getScrollPercent() {
    return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100);
}

function changeIcon(id){
    iconStyle = document.getElementById(id).style;

    if(iconStyle.getPropertyValue("--btn-icon") == "'+'"){
        iconStyle.setProperty("--btn-icon", "'—'");
    }
    else{
        iconStyle.setProperty("--btn-icon", "'+'");
    }
}

window.addEventListener("scroll", () => {
    const scrollInVh = ((window.scrollY * window.innerHeight) / document.documentElement.scrollHeight);

    progress_bar.style.width = getScrollPercent() + "%";

    if (scrollInVh > 100) {
        return_btn.classList.add("return-btn-div");
    }
    else {
        return_btn.classList.remove("return-btn-div");
    }
});