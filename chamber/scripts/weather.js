const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.926124935429044&lon=-112.45641513921389&appid=1dc3128e9373c1285f6f5bfa85e7cf04&units=imperial';

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

function displayResults(data) {
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


// Update this URL to your API call URL to openweather
// const LAT = 42.926124935429044;
// const LON = -112.45641513921389;
// const APIKEY = "551738b0ab1174f3ec4a37203c32a6ff";
// const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

const ONE_DAY = 24 * 60 * 60 * 1000

function showCurrentTimeForecast(forecasts){
  const weatherElt = document.querySelector("#forecast")
  // Get the current time from the first element
  const timenow = forecasts[0].dt_txt.slice(11, 19) 

  // Build a new list of temp forecasts with the same time
  let temps = forecasts.filter(x => x.dt_txt.indexOf(timenow) != -1)

  // Output the next three days temperatures
  for (let i=1; i <= 3; i++){
    let newsection = document.createElement("section");    
    let mydate = temps[i].dt_txt.slice(5, 10)
    let icon = temps[i].weather[0].icon
    newsection.innerHTML = `<p>${mydate}</p>
    <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather"></p>
    <p>${temps[i].main.temp.toFixed(0)}&deg;F</p>`
    weatherElt.append(newsection)
  }
  
}

async function fetchForecast() {
    try {
      const response = await fetch(weatherURL);
      if (response.ok) {
        const data = await response.json();        
        showCurrentTimeForecast(data.list);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }

fetchForecast()



