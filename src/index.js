function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];

  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  return `${currentDay}, ${currentHour}:${currentMinutes} `;
}

let currentTime = document.querySelector("#current-time");
let now = new Date();

currentTime.innerHTML = formatDate(now);

function showTemp(response) {
  let mainCity = document.querySelector("#main-city");
  mainCity.innerHTML = response.data.name;
  let maxTemp = document.querySelector("#max-main");
  maxTemp.innerHTML = Math.round(response.data.main.temp_max);
  let minTemp = document.querySelector("#min-main");
  minTemp.innerHTML = Math.round(response.data.main.temp_min);
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.weather[0].main;
  let realFeel = document.querySelector("#real-feel");
  realFeel.innerHTML = `Real feel: ${Math.round(
    response.data.main.feels_like
  )}ºC`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed * 3.6)} km/h`;
}

function forecastTemp(response) {
  let maxTemp1 = document.querySelector(".max1");
  console.log(maxTemp1);
  console.log(Math.round(response.data.list[0].main.temp_max));
  maxTemp1.innerHTML = `${Math.round(response.data.list[0].main.temp_max)}`;
  let minTemp1 = document.querySelector(".min1");
  console.log(minTemp1);
  console.log(Math.round(response.data.list[0].main.temp_min));
  minTemp1.innerHTML = `${Math.round(response.data.list[0].main.temp_min)}`;
  let maxTemp2 = document.querySelector(".max2");
  maxTemp2.innerHTML = `${Math.round(response.data.list[6].main.temp_max)}`;
  let minTemp2 = document.querySelector(".min2");
  minTemp2.innerHTML = `${Math.round(response.data.list[3].main.temp_min)}`;
  let maxTemp3 = document.querySelector(".max3");
  maxTemp3.innerHTML = `${Math.round(response.data.list[6].main.temp_max)}`;
  let minTemp3 = document.querySelector(".min3");
  minTemp3.innerHTML = `${Math.round(response.data.list[3].main.temp_min)}`;
  let maxTemp4 = document.querySelector(".max4");
  maxTemp4.innerHTML = `${Math.round(response.data.list[6].main.temp_max)}`;
  let minTemp4 = document.querySelector(".min4");
  minTemp4.innerHTML = `${Math.round(response.data.list[3].main.temp_min)}`;
  let maxTemp5 = document.querySelector(".max5");
  maxTemp5.innerHTML = `${Math.round(response.data.list[6].main.temp_max)}`;
  let minTemp5 = document.querySelector(".min5");
  minTemp5.innerHTML = `${Math.round(response.data.list[3].main.temp_min)}`;
}

function search(city) {
  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let units = "metric";
  let urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(urlCity).then(showTemp);
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(forecastUrl).then(forecastTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city");
  let city = inputCity.value;
  search(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

// let celsius = document.querySelector("#celsius");
// function showCelsius(event) {
//   event.preventDefault();
//   let maxTemp = document.querySelector("#max-main");
//   let maxTemperature = maxTemp.innerHTML;
//   maxTemperature = Number(maxTemperature);
//   maxTemp.innerHTML = Math.round(((maxTemperature - 32) * 5) / 9);
//   // maxTemp.innerHTML = 10;
//   let minTemp = document.querySelector("#min-main");
//   let minTemperature = minTemp.innerHTML;
//   minTemperature = Number(minTemperature);
//   minTemp.innerHTML = Math.round(((minTemperature - 32) * 5) / 9);
//   // minTemp.innerHTML = 5;
//   let celsius = document.querySelector("#celsius");
//   celsius.removeEventListener("click", showCelsius);
// }
// celsius.addEventListener("click", showCelsius);

let fahrenheit = document.querySelector("#fahrenheit");
function showFahrenheit(event) {
  event.preventDefault();

  let maxTemp = document.querySelector("#max-main");
  console.log(maxTemp);
  let maxTemperature = Number(maxTemp.innerHTML);
  // maxTemperature = Number(maxTemperature);
  maxTemp.innerHTML = Math.round((maxTemperature * 9) / 5 + 32);
  // maxTemp.innerHTML = 50;
  let minTemp = document.querySelector("#min-main");
  let minTemperature = Number(minTemp.innerHTML);
  // minTemperature = Number(minTemperature);
  minTemp.innerHTML = Math.round((minTemperature * 9) / 5 + 32);
  // minTemp.innerHTML = 41;
  // let fahrenheit = document.querySelector("#fahrenheit");
  // fahrenheit.removeEventListener("click", showFahrenheit);
  // Forecast in Fahrenheit

  let maxTemp1 = document.querySelector(".max1");
  let maxTemperature1 = Number(maxTemp1.innerHTML);
  maxTemp1.innerHTML = Math.round((maxTemperature1 * 9) / 5 + 32);
  let minTemp1 = document.querySelector(".min1");
  let minTemperature1 = Number(minTemp1.innerHTML);
  minTemp1.innerHTML = Math.round((minTemperature1 * 9) / 5 + 32);

  let maxTemp2 = document.querySelector(".max2");
  let maxTemperature2 = Number(maxTemp2.innerHTML);
  maxTemp2.innerHTML = Math.round((maxTemperature2 * 9) / 5 + 32);
  let minTemp2 = document.querySelector(".min2");
  let minTemperature2 = Number(minTemp2.innerHTML);
  minTemp2.innerHTML = Math.round((minTemperature2 * 9) / 5 + 32);

  let maxTemp3 = document.querySelector(".max3");
  let maxTemperature3 = Number(maxTemp3.innerHTML);
  maxTemp3.innerHTML = Math.round((maxTemperature3 * 9) / 5 + 32);
  let minTemp3 = document.querySelector(".min3");
  let minTemperature3 = Number(minTemp3.innerHTML);
  minTemp3.innerHTML = Math.round((minTemperature3 * 9) / 5 + 32);

  let maxTemp4 = document.querySelector(".max4");
  let maxTemperature4 = Number(maxTemp4.innerHTML);
  maxTemp4.innerHTML = Math.round((maxTemperature4 * 9) / 5 + 32);
  let minTemp4 = document.querySelector(".min4");
  let minTemperature4 = Number(minTemp4.innerHTML);
  minTemp4.innerHTML = Math.round((minTemperature4 * 9) / 5 + 32);

  let maxTemp5 = document.querySelector(".max5");
  let maxTemperature5 = Number(maxTemp5.innerHTML);
  maxTemp5.innerHTML = Math.round((maxTemperature5 * 9) / 5 + 32);
  let minTemp5 = document.querySelector(".min5");
  let minTemperature5 = Number(minTemp5.innerHTML);
  minTemp5.innerHTML = Math.round((minTemperature5 * 9) / 5 + 32);
  let fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.removeEventListener("click", showFahrenheit);

  let celsius = document.querySelector("#celsius");
  function showCelsius(event) {
    event.preventDefault();
    let maxTemp = document.querySelector("#max-main");
    let maxTemperature = maxTemp.innerHTML;
    maxTemperature = Number(maxTemperature);
    maxTemp.innerHTML = Math.round(((maxTemperature - 32) * 5) / 9);
    // maxTemp.innerHTML = 10;
    let minTemp = document.querySelector("#min-main");
    let minTemperature = minTemp.innerHTML;
    minTemperature = Number(minTemperature);
    minTemp.innerHTML = Math.round(((minTemperature - 32) * 5) / 9);
    // minTemp.innerHTML = 5;

    let maxTemp1 = document.querySelector(".max1");
    let maxTemperature1 = Number(maxTemp1.innerHTML);
    maxTemp1.innerHTML = Math.round(((maxTemperature1 - 32) * 5) / 9);
    let minTemp1 = document.querySelector(".min1");
    let minTemperature1 = Number(minTemp1.innerHTML);
    minTemp1.innerHTML = Math.round(((minTemperature1 - 32) * 5) / 9);

    let maxTemp2 = document.querySelector(".max2");
    let maxTemperature2 = Number(maxTemp2.innerHTML);
    maxTemp2.innerHTML = Math.round(((maxTemperature2 - 32) * 5) / 9);
    let minTemp2 = document.querySelector(".min2");
    let minTemperature2 = Number(minTemp2.innerHTML);
    minTemp2.innerHTML = Math.round(((minTemperature2 - 32) * 5) / 9);

    let maxTemp3 = document.querySelector(".max3");
    let maxTemperature3 = Number(maxTemp3.innerHTML);
    maxTemp3.innerHTML = Math.round(((maxTemperature3 - 32) * 5) / 9);
    let minTemp3 = document.querySelector(".min3");
    let minTemperature3 = Number(minTemp3.innerHTML);
    minTemp3.innerHTML = Math.round(((minTemperature3 - 32) * 5) / 9);

    let maxTemp4 = document.querySelector(".max4");
    let maxTemperature4 = Number(maxTemp4.innerHTML);
    maxTemp4.innerHTML = Math.round(((maxTemperature4 - 32) * 5) / 9);
    let minTemp4 = document.querySelector(".min4");
    let minTemperature4 = Number(minTemp4.innerHTML);
    minTemp4.innerHTML = Math.round(((minTemperature4 - 32) * 5) / 9);

    let maxTemp5 = document.querySelector(".max5");
    let maxTemperature5 = Number(maxTemp5.innerHTML);
    maxTemp5.innerHTML = Math.round(((maxTemperature5 - 32) * 5) / 9);
    let minTemp5 = document.querySelector(".min5");
    let minTemperature5 = Number(minTemp5.innerHTML);
    minTemp5.innerHTML = Math.round(((minTemperature5 - 32) * 5) / 9);

    let celsius = document.querySelector("#celsius");
    celsius.removeEventListener("click", showCelsius);
    fahrenheit.addEventListener("click", showFahrenheit);
  }
  celsius.addEventListener("click", showCelsius);
}
fahrenheit.addEventListener("click", showFahrenheit);

// Forecast
let currentDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let secondDay = document.querySelector(".second-weather");
let secondWeather = currentDate.getDay() + 2;
let thirdDay = document.querySelector(".third-weather");
let thirdWeather = currentDate.getDay() + 3;

let fourthDay = document.querySelector(".fourth-weather");
let fourthWeather = currentDate.getDay() + 4;

let fifthDay = document.querySelector(".fifth-weather");
let fifthWeather = currentDate.getDay() + 5;

if (currentDate.getDay() === 2) {
  secondDay.innerHTML = days[secondWeather];
  thirdDay.innerHTML = days[thirdWeather];
  fourthDay.innerHTML = days[fourthWeather];
  fifthDay.innerHTML = days[0];
} else {
  if (currentDate.getDay() === 3) {
    secondDay.innerHTML = days[secondWeather];
    thirdDay.innerHTML = days[thirdWeather];
    fourthDay.innerHTML = days[0];
    fifthDay.innerHTML = days[1];
  } else {
    if (currentDate.getDay() === 4) {
      secondDay.innerHTML = days[secondWeather];
      thirdDay.innerHTML = days[0];
      fourthDay.innerHTML = days[1];
      fifthDay.innerHTML = days[2];
    } else {
      if (currentDate.getDay() === 5) {
        secondDay.innerHTML = days[0];
        thirdDay.innerHTML = days[1];
        fourthDay.innerHTML = days[2];
        fifthDay.innerHTML = days[3];
      } else {
        if (currentDate.getDay() === 6) {
          secondDay.innerHTML = days[1];
          thirdDay.innerHTML = days[2];
          fourthDay.innerHTML = days[3];
          fifthDay.innerHTML = days[4];
        } else {
          secondDay.innerHTML = days[secondWeather];
          thirdDay.innerHTML = days[thirdWeather];
          fourthDay.innerHTML = days[fourthWeather];
          fifthDay.innerHTML = days[fifthWeather];
        }
      }
    }
  }
}

// Current Weather

function showPosition(position) {
  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(currentUrl).then(showTemp);
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(forecastUrl).then(forecastTemp);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector(".current-button");
button.addEventListener("click", getCurrentPosition);

function weatherMadrid() {
  let mainCity = document.querySelector("#main-city");
  let madrid = document.querySelector("#madrid");
  mainCity.innerHTML = madrid.innerHTML;

  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let city = "madrid";
  let units = "metric";
  let urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(urlCity).then(showTemp);
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(forecastUrl).then(forecastTemp);
  let inputCity = document.querySelector("#input-city");
  inputCity.value = "Madrid";
}
let madrid = document.querySelector("#madrid");
madrid.addEventListener("click", weatherMadrid);

function weatherParis() {
  let mainCity = document.querySelector("#main-city");
  let paris = document.querySelector("#paris");
  mainCity.innerHTML = paris.innerHTML;
  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let city = "paris";
  let units = "metric";
  let urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(urlCity).then(showTemp);
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(forecastUrl).then(forecastTemp);
  let inputCity = document.querySelector("#input-city");
  inputCity.value = "Paris";
}
let paris = document.querySelector("#paris");
paris.addEventListener("click", weatherParis);

function weatherNewYork() {
  let mainCity = document.querySelector("#main-city");
  let newYork = document.querySelector("#new-york");
  mainCity.innerHTML = newYork.innerHTML;
  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let city = "new york";
  let units = "metric";
  let urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(urlCity).then(showTemp);
  let forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(forecastUrl).then(forecastTemp);
  let inputCity = document.querySelector("#input-city");
  inputCity.value = "New York";
}
let newYork = document.querySelector("#new-york");
newYork.addEventListener("click", weatherNewYork);

function weatherMilan() {
  let mainCity = document.querySelector("#main-city");
  let milan = document.querySelector("#milan");
  mainCity.innerHTML = milan.innerHTML;
  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let city = "milan";
  let units = "metric";
  let urlCity = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(urlCity).then(showTemp);
  let forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(forecastUrl).then(forecastTemp);
  let inputCity = document.querySelector("#input-city");
  inputCity.value = "Milan";
}
let milan = document.querySelector("#milan");
milan.addEventListener("click", weatherMilan);

function weatherBordeaux() {
  let mainCity = document.querySelector("#main-city");
  let bordeaux = document.querySelector("#bordeaux");
  mainCity.innerHTML = bordeaux.innerHTML;

  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let city = "bordeaux";
  let units = "metric";
  let urlCity = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(urlCity).then(showTemp);
  let forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(forecastUrl).then(forecastTemp);
  let inputCity = document.querySelector("#input-city");
  inputCity.value = "Bordeaux";
}
let bordeaux = document.querySelector("#bordeaux");
bordeaux.addEventListener("click", weatherBordeaux);

function weatherBerlin() {
  let mainCity = document.querySelector("#main-city");
  let berlin = document.querySelector("#berlin");
  mainCity.innerHTML = berlin.innerHTML;
  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let city = "berlin";
  let units = "metric";
  let urlCity = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(urlCity).then(showTemp);
  let forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(forecastUrl).then(forecastTemp);
  let inputCity = document.querySelector("#input-city");
  inputCity.value = "Berlin";
}
let berlin = document.querySelector("#berlin");
berlin.addEventListener("click", weatherBerlin);

search("Burgos");
