let input = document.querySelector(".input-box");
let searchbtn = document.querySelector("#searchBtn");
let weatherIMG = document.querySelector("#weather-img");
let temp = document.getElementById("temperature");
let desc = document.querySelector(".desc");
let humidity = document.querySelector(".humidity");
let wind_speed = document.querySelector("#wind");
let error = document.querySelector(".error");
let waether_body = document.querySelector(".weather-body");

async function checkWeather(city) {
  let APIkey = "4a171681f2c612987d4f79b9ffb88a32";
  let APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

  let weather_data = await fetch(`${APIurl}`).then((res) => res.json());
  console.log(weather_data);

  if (weather_data.cod === `404`) {
    error.style.display = "flex";
    waether_body.style.display = "none";
    return;
  }

  waether_body.style.display = "flex";
  error.style.display = "none";
  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;
  desc.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weatherIMG.src = "./assets/partial-clouds.png";
      break;

    case "Sunny":
      weatherIMG.src = "./assets/sunny.png";
      break;

    case "Thunderstorm":
      weatherIMG.src = "./assets/rain.png";
      break;

    case "Rain":
      weatherIMG.src = "./assets/rain.png";
      break;

    case "Mist":
      weatherIMG.src = "./assets/mist.png";
      break;
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(input.value);
});
