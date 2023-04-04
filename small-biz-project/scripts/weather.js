const apiKey = "e8427be24a0ba0ff0aea035b54f04da5";
const apiUrlToday = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=${apiKey}`;
const API_KEY = "fa0eab8c3a3d435f5fb140f00f7dfa5b";
const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=${API_KEY}&units=imperial`;

// Define a function to create a new card with the specified title and content
function createCard(title, content) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;
  return cardDiv;
}

// Fetch today's weather data and update the page with the results
fetch(apiUrlToday)
  .then(response => response.json())
  .then(data => {
    
    const conditionCard = createCard("Weather Condition", data.weather[0].description);
    const tempCard = createCard("Temperature", `${data.main.temp}&deg;F`);
    const humidityCard = createCard("Humidity", `${data.main.humidity}%`);

    document.getElementById("today-condition").appendChild(conditionCard);
    document.getElementById("today-temperature").appendChild(tempCard);
    document.getElementById("today-humidity").appendChild(humidityCard);
  })
  .catch(error => {
    console.log("Error fetching weather data:", error);
  });

// Fetch the forecast data and update the page with the results
fetch(apiUrlForecast)
  .then((response) => response.json())
  .then((data) => {
    

    // Filter the list to get the forecast for the next three days
    const forecastList = data.list.filter((forecast) => {
      const date = new Date(forecast.dt_txt);
      return date.getHours() === 12; // Only keep the noon forecast for each day
    }).slice(0, 3);

    // Create HTML elements to display the forecast data
    const forecastDiv = document.getElementById("forecast");
    forecastList.forEach((forecast) => {
      const date = new Date(forecast.dt_txt);
      const dayOfWeek = date.toLocaleString("default", { weekday: "long" });
      const temperature = Math.round(forecast.main.temp);
      const description = forecast.weather[0].description;

      const dayDiv = document.createElement("div");
      dayDiv.classList.add("card");
      dayDiv.innerHTML = `
        <h2>${dayOfWeek}</h2>
        <p>${description}</p>
        <p>${temperature}&deg;F</p>
      `;

      // Add the weather icon to the card
      const iconUrl = getIconUrl(forecast);
      const iconImg = document.createElement("img");
      iconImg.src = iconUrl;
      iconImg.classList.add("weatherIcon");
      dayDiv.appendChild(iconImg);

      forecastDiv.appendChild(dayDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching data from API:", error);
  });

// Define a function to get the icon URL for a given forecast
function getIconUrl(forecast) {
  const iconCode = forecast.weather[0].icon;
  return `https://openweathermap.org/img/w/${iconCode}.png`;
}