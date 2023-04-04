const link = "data/fruit.json";

const getFruitData = async () => {
    try {
      const response = await fetch(link);
      const data = await response.json();
      generateOptions(data.fruit);
    } catch (error) {
      console.error(error);
    }
  };

getFruitData();

const generateOptions = (fruit) => {
    const fruitArray = ["fruit1", "fruit2", "fruit3"];
  
    fruitArray.forEach((id) => {
      const element = document.getElementById(id);
      fruit.forEach((fruit) => {
        let option = new Option(fruit.name);
        element.add(option);
      });
    });
  };

const createDrinkButton = document.getElementById("createDrink");
const form = document.querySelector('form');
const requiredInputs = form.querySelectorAll('[required]');

function checkFormValidity() {
  const isFormValid = Array.from(requiredInputs).every(input => input.checkValidity());
  createDrinkButton.disabled = !isFormValid;
}

checkFormValidity();

form.addEventListener('input', () => {
  checkFormValidity();
});

createDrinkButton.addEventListener("click", function(event) {
  event.preventDefault();
  displayOutput();
});

async function displayOutput() {
  const response = await fetch(link);
  const data = await response.json();
  const selectedFruits = [];
  
  for (let i = 1; i <= 3; i++) {
    const fruit = document.getElementById("fruit" + i);
    const index = fruit.selectedIndex;
    selectedFruits.push({
      name: fruit.options[index].value,
      carbs: data.fruit[index].nutritions.carbohydrates,
      protein: data.fruit[index].nutritions.protein,
      fat: data.fruit[index].nutritions.fat,
      sugar: data.fruit[index].nutritions.sugar
    });
  }
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const fruit1 = document.getElementById("fruit1").value;
  const fruit2 = document.getElementById("fruit2").value;
  const fruit3 = document.getElementById("fruit3").value;
  const instructions = document.getElementById("specialInstructions").value;

  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
  
  const divContainer = document.querySelector('#output');
  
  const personalHeading = document.createElement('h3');
  const namee = document.createElement('p');
  const emaill = document.createElement('p');
  const phonee = document.createElement('p');

  const fruitHeading = document.createElement('h3');
  const fruit11 = document.createElement('p');
  const fruit22 = document.createElement('p');
  const fruit33 = document.createElement('p');

  const instructionsHeading = document.createElement('h3');
  const instructionss = document.createElement('p');
  const dateToday = document.createElement('p');

  const nutritionHeading = document.createElement('h3');
  const carbb = document.createElement('p');
  const prott = document.createElement('p');
  const fatt = document.createElement('p');
  const sugg = document.createElement('p');
  
  const totalCarbs = selectedFruits.reduce((acc, f) => acc + f.carbs, 0);
  const totalProtein = selectedFruits.reduce((acc, f) => acc + f.protein, 0);
  const totalFat = selectedFruits.reduce((acc, f) => acc + f.fat, 0);
  const totalSugar = selectedFruits.reduce((acc, f) => acc + f.sugar, 0);
  
  personalHeading.textContent = "Your Information:";
  fruitHeading.textContent = "Selected Fruits:";
  instructionsHeading.textContent = "Instructions:";
  nutritionHeading.textContent = "Nutrition:";

  namee.textContent = "Name: " + name;
  emaill.textContent = "Email: " + email;
  phonee.textContent = "Phone: " + phone;
  fruit11.textContent = "Fruit1: " + fruit1;
  fruit22.textContent = "Fruit2: " + fruit2;
  fruit33.textContent = "Fruit3: " + fruit3;
  instructionss.textContent = "Instructions: " + instructions;
    
  dateToday.textContent = "Order Date: " + fulldate; 
  carbb.textContent = "Total Carbs: " + totalCarbs;
  prott.textContent = "Total Protein: " + totalProtein;
  fatt.textContent = "Total Fat: " + totalFat;
  sugg.textContent = "Total Sugar: " + totalSugar;
  
  divContainer.appendChild(personalHeading);
  divContainer.appendChild(namee);
  divContainer.appendChild(emaill);
  divContainer.appendChild(phonee);
  divContainer.appendChild(dateToday);

  divContainer.appendChild(fruitHeading);
  divContainer.appendChild(fruit11);
  divContainer.appendChild(fruit22);
  divContainer.appendChild(fruit33);

  divContainer.appendChild(instructionsHeading);
  divContainer.appendChild(instructionss);

  divContainer.appendChild(nutritionHeading);
  divContainer.appendChild(carbb);
  divContainer.appendChild(prott);
  divContainer.appendChild(fatt);
  divContainer.appendChild(sugg);
  }
  