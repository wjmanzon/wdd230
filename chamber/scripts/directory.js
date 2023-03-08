// Display the data from the JSON file
const businessData = "data/data.json";

async function getBusinessData() {
    const response = await fetch(businessData);
    const data = await response.json();
    displayBusiness(data.businesses);
}

getBusinessData();

const displayBusiness = (businesses) => {
    const businessesCards = document.querySelector(".businesses-cards");

    businesses.forEach((business) => {
        // Create the elements for each business
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let logo = document.createElement("img");
        let website = document.createElement("a");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let membership = document.createElement("p");

        // Set the data on each element
        logo.setAttribute("src", business.logo);
        logo.setAttribute("class", "company-images");
        logo.setAttribute("alt", `Logo of ${business.name}`);
        logo.setAttribute("loading", "lazy");
        name.textContent = `${business.name}`;
        address.textContent = business.address;
        phone.textContent = business.phone;
        website.textContent = `Website`;
        website.href = business.website;
        membership.textContent = `${business.membership}`;

        // Append the data to show in the browser
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(website);

        // Apped all in the section (card) element
        businessesCards.appendChild(card);
    });
}

// Order the data in a grid or list view

const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");
const display = document.querySelector("div.businesses-cards");

gridBtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listBtn.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
