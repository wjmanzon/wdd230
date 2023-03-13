const url = "https://api.openweathermap.org/data/2.5/weather?q=Rexburg&units=imperial&appid=e8427be24a0ba0ff0aea035b54f04da5";

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch();

  function  displayResults(weatherData) {
    const rexburgTemp = weatherData.main.temp.toFixed(0);
    currentTemp.textContent = rexburgTemp;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    const rexburgWindSpeed = weatherData.wind.speed;
    windSpeed.textContent = rexburgWindSpeed;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    // Calculate Windchill
    if (rexburgTemp <= 50 && rexburgWindSpeed > 3.0) {

      let windChill = 35.74 + (0.6215 * rexburgTemp) - (35.75 * (rexburgWindSpeed ** 0.16)) + (0.4275 * (rexburgTemp * (rexburgWindSpeed ** 0.16)));

      let showWindChill = windChill.toFixed(2);
      document.querySelector("#wind-chill").innerHTML = showWindChill;
    }

    else {
      showWindChill = "N/A";
      document.querySelector("#wind-chill").innerHTML = showWindChill;
    }
  }

