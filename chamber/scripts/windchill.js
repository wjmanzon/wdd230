const temperature=document.getElementById("temperature").textContent;
const windSpeed=document.getElementById("wind-speed").textContent;
const windChill=document.getElementById("wind-chill");

function getWindChill(temperature, windSpeed){
    return 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16))
};

(temperature <= 50 && windSpeed>3) ? (windChill.textContent=`${parseInt(getWindChill(temperature, windSpeed))}°`):(windChill.textContent="N/A");