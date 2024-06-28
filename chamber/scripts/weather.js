const weather_url = 'https://api.openweathermap.org/data/2.5/weather?lat=42.926124935429044&lon=-112.45641513921389&appid=1dc3128e9373c1285f6f5bfa85e7cf04&units=imperial';

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg:F`;
    captionDesc.innerText = data.weather[0].main; // this is not a string becase you don't need it reurned as a string
    weatherIcon.setAttribute("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png")
}

async function apiFetch() {
    try {
      const response = await fetch(weather_url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data); 
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(Problem);
    }
  }
  
apiFetch();

