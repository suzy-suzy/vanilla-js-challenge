const weatherApi = document.querySelector(".js-weather");

const COORDS_LS = "coords";
const API_KEY = "dc78cd8ad19bbd9adc7960f1f3284943";

function getWeather(lat, lon){
    fetch(
        // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&id=524901&lang=kr&appid=${API_KEY}&units=metric`
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function(response){
            // console.log(response);
            return response.json();
        })
        .then(function(json){
            // console.log(json);
            const temperature = Math.round(json.main.temp);
            const place = json.name;
            const weather = json.weather;
            // const weatherJson = json.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
            // const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            weatherApi.innerHTML = `<figure><img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption></figure><strong>${temperature}˚</strong><span>${place}</span>`;
        });
}

function saveCoords(obj){
    localStorage.setItem(COORDS_LS, JSON.stringify(obj));
}

function positionSuccess(position){
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const positionObj = {
        latitude,
        longitude
    };
    saveCoords(positionObj);
    getWeather(latitude, longitude);
}

function positionError(){
    console.log("Cant access geo location.");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        // console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();