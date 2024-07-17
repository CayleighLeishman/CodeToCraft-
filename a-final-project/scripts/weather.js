
// TO DO: CHANGE TO SALT LAKE CITY THIS IS SET TO POCATELLO'S
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=40.7767507&lon=-112.085298&appid=1dc3128e9373c1285f6f5bfa85e7cf04&units=imperial';
const humidity= document.querySelector('#humidity')

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

function displayResults(data) {
    humidity.innerHTML = `${data.main.humidity}%`;
    currentTemp.innerHTML = `${data.main.temp}&deg:F`;
    captionDesc.innerText = data.weather[0].main; // this is not a string becase you don't need it reurned as a string
    weatherIcon.setAttribute("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png")
}

async function apiFetch() {
    try {
      const response = await fetch(weatherURL);
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
