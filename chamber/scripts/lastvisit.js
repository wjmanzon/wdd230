const lastVisit = document.querySelector("#lastVisit")

if (!localStorage.getItem("lastVisit")) {
    localStorage.setItem("lastVisit", new Date().getTime());
    lastVisit.textContent = "Welcome! It's your first visit to this page.";
} else {
    let currentDate = new Date();
    let lastVisited = new Date(parseInt(localStorage.getItem("lastVisit")));
    let calculateTimeDiff = currentDate - lastVisited;
    let calculateDays = Math.round(calculateTimeDiff / (1000 * 60 * 60 * 24));

    if (calculateDays == 1) {
        lastVisit.textContent = `It's been ${calculateDays} day since your last visit. Welcome again!`
    } else {
        lastVisit.textContent = `It's been ${calculateDays} days since your last visit. Welcome again!`
    }
}