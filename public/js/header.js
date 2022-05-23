window.addEventListener("load", function () {
let hamburger = document.querySelector(".hamburger")
let burgerDropDown = document.querySelector(".dropdown-burger");

hamburger.addEventListener("click", (e) => {
    burgerDropDown.style.display = "block";
});

burgerDropDown.addEventListener("mouseleave", (e) => {
    burgerDropDown.style.display = "none";
});

});
