const url = 'https://wjmanzon.github.io/wdd230/chamber/data.json';

async function getCompanyData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.companies);
  displayCompanies(data.companies);
}

function displayCompanies(companies) {
  const cards = document.querySelector('div.cards');

  companies.forEach((company) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');

    let address = document.createElement('p');
    let phone = document.createElement('p');
    let membershiplevel = document.createElement('p');

    h2.setAttribute('class', 'companynames');
    logo.setAttribute('src', company.logo);
    logo.setAttribute('alt', `Lolo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', 'auto');
    logo.setAttribute('height', '60');

    h2.textContent = `${company.companyname}`;;
    address.textContent = `Address: ${company.address}`;
    phone.textContent = `Phone: ${company.phonenumber}`;
    membershiplevel.textContent = `Membership level: ${company.membershiplevel}`;

    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membershiplevel);


    cards.appendChild(card);
  });
}

getCompanyData();