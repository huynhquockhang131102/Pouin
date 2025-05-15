// script.js
document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("bg-white", "shadow-lg");
    } else {
        header.classList.remove("bg-white", "shadow-lg");
    }
});
