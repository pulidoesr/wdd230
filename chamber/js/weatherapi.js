// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind_speed');
const windChill = document.querySelector('#wind_chill');
const feelsLike = document.querySelector('#feels_like');
const humidity = document.querySelector('#humidity');
let url = 'https://api.openweathermap.org/data/2.5/weather?q=Evansville,us&appid=cb4343a1424216be70f9ceed6101df98&units=imperial'

// API to Pull the information
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data) // displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// Execute the API
apiFetch();

// Function to display the data
function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  feelsLike.innerHTML = `<strong>${weatherData.main.feels_like}</strong>`;
  humidity.innerHTML = `<strong>${weatherData.main.humidity}</strong>`;
  windSpeed.innerHTML = `<strong>${weatherData.wind.speed}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  weatherData.weather.forEach(element => {
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
  });
  
}

