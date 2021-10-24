const weather = document.querySelector("#weather");
const city = document.querySelector("#weather span:first-child");
const degree = document.querySelector("#weather span:last-child");   
const API_KEY = "632f02e1df38a5bf067021d0e47a8383";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        city.innerText = data.name; 
        degree.innerText = `🍀 ${data.main.temp}℃ . ${data.weather[0].main}`;
        weather.classList.add("weatherani");
    });
}
function onGeoErr() {
    alert("I can't find where you are.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);