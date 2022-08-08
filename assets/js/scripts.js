
const body = document.querySelector("[data-body]");
const navButtonToggle = document.querySelector("[data-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const heroImg = document.querySelector("[data-hero-img]");

navButtonToggle.addEventListener("click", function() {
    [this, navbar, body, heroImg].forEach(_item => _item.classList.toggle("active"));
});



const testimony = document.querySelectorAll("[data-testimony]");
const testimonyTabButtons = document.querySelectorAll("[data-testimony-tab-btn]");

testimonyTabButtons.forEach((_btn, _index) => {
    _btn.addEventListener("click", e => {
        testimonyTabButtons.forEach(_ => _.classList.remove("active"));
        e.target.classList.toggle("active");

        testimony.forEach(_ => _.classList.remove("active"));
        testimony[_index].classList.toggle("active");
    });
});
