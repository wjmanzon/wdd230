// Responsive Menu
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById('hamburger-button')
x.onclick = toggleMenu;