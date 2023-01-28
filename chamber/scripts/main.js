// Copyright Date
let date = new Date();
let year = date.getFullYear();

document.querySelector('#copyrightYear').innerHTML = year;

// Last Modified
let currentDate = document.lastModified;
document.querySelector('#lastModified').textContent = currentDate;

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

document.querySelector('#dateToday').innerHTML = fulldateUK;

// Responsive Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburger-button')
x.onclick = toggleMenu;