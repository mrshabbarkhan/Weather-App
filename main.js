let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let input = document.querySelector("input");
let form = document.querySelector("form");
let button = document.querySelector("button");
let image = document.querySelector("#icon");
let image1 = document.querySelector("#icon1");
let image2 = document.querySelector("#icon2");
let image3 = document.querySelector("#icon3");
let image4 = document.querySelector("#icon4");
let image5 = document.querySelector("#icon5");
let image6 = document.querySelector("#icon6");
let image7 = document.querySelector("#icon7");
let feel = document.querySelector("#feel");
let feel1 = document.querySelector("#feel1");
let feel2 = document.querySelector("#feel2");
let feel3 = document.querySelector("#feel3");
let feel4 = document.querySelector("#feel4");
let feel5 = document.querySelector("#feel5");
let feel6 = document.querySelector("#feel6");
let feel7 = document.querySelector("#feel7");
let temp1 = document.querySelector("#temp1");
let temp2 = document.querySelector("#temp2");
let temp3 = document.querySelector("#temp3");
let temp4 = document.querySelector("#temp4");
let temp5 = document.querySelector("#temp5");
let temp6 = document.querySelector("#temp6");
let temp7 = document.querySelector("#temp7");

let hour1 = document.querySelector("#h-1");
let hour2 = document.querySelector("#h-2");
let hour3 = document.querySelector("#h-3");
let hour4 = document.querySelector("#h-4");
let hour5 = document.querySelector("#h-5");
let hour6 = document.querySelector("#h-6");

let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let humidity = document.querySelector("#humidity");
let snow = document.querySelector("#snow");
let avgtemp = document.querySelector("#avgtemp");
let avgfar = document.querySelector("#avgfar");
let maxwind = document.querySelector("#maxwind");
let rain = document.querySelector("#rain");

let date1 = document.querySelector("#date");

const getwheather = async (e) => {
  try {
    e.preventDefault();

    let res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=3df469a6dbb1434f897174901241903&q=${input.value}&days=8&aqi=yes&alerts=yes`
    );
    let data = await res.json();
    city.textContent = data.current.temp_c + " °";
    temp1.textContent = data.current.temp_c + " °";
    feel.textContent = data.current.condition.text;
    feel1.textContent = data.current.condition.text;
    feel2.innerText = data.forecast.forecastday[1].day.condition.text;
    feel3.textContent = data.forecast.forecastday[2].day.condition.text;
    feel4.textContent = data.forecast.forecastday[3].day.condition.text;
    feel5.textContent = data.forecast.forecastday[4].day.condition.text;
    feel6.textContent = data.forecast.forecastday[5].day.condition.text;
    feel7.textContent = data.forecast.forecastday[6].day.condition.text;
    temp.textContent = data.location.name;
    temp2.textContent = data.forecast.forecastday[1].day.avgtemp_c + " °";
    temp3.textContent = data.forecast.forecastday[2].day.avgtemp_c + " °";
    temp4.textContent = data.forecast.forecastday[3].day.avgtemp_c + " °";
    temp5.textContent = data.forecast.forecastday[4].day.avgtemp_c + " °";
    temp6.textContent = data.forecast.forecastday[5].day.avgtemp_c + " °";
    temp7.textContent = data.forecast.forecastday[6].day.avgtemp_c + " °";
    image.setAttribute("src", data.current.condition.icon);
    image1.setAttribute("src", data.current.condition.icon);
    image2.setAttribute("src", data.forecast.forecastday[1].day.condition.icon);
    image3.setAttribute("src", data.forecast.forecastday[2].day.condition.icon);
    image4.setAttribute("src", data.forecast.forecastday[3].day.condition.icon);
    image5.setAttribute("src", data.forecast.forecastday[4].day.condition.icon);
    image6.setAttribute("src", data.forecast.forecastday[5].day.condition.icon);
    image7.setAttribute("src", data.forecast.forecastday[6].day.condition.icon);

    hour1.innerText = data.forecast.forecastday[0].hour[6].temp_c + " °";
    hour2.innerText = data.forecast.forecastday[0].hour[9].temp_c + " °";
    hour3.innerText = data.forecast.forecastday[0].hour[12].temp_c + " °";
    hour4.innerText = data.forecast.forecastday[0].hour[15].temp_c + " °";
    hour5.innerText = data.forecast.forecastday[0].hour[18].temp_c + " °";
    hour6.innerText = data.forecast.forecastday[0].hour[21].temp_c + " °";

    date1.innerText = data.forecast.forecastday[0].date;

    sunrise.innerText = data.forecast.forecastday[0].astro.sunrise;
    sunset.innerText = data.forecast.forecastday[0].astro.sunset;

    humidity.innerText = data.forecast.forecastday[0].day.avghumidity;
    snow.innerText = data.forecast.forecastday[0].day.daily_chance_of_snow;
    avgtemp.innerText = data.forecast.forecastday[0].day.avgtemp_c;
    avgfar.innerText = data.forecast.forecastday[0].day.avgtemp_f;
    maxwind.innerText = data.forecast.forecastday[0].day.maxwind_kph;
    rain.innerText = data.forecast.forecastday[0].day.daily_chance_of_rain;
  } catch (error) {
    alert("please Enter currect city name");
  }
  form.reset();
};
form.addEventListener("submit", getwheather);
