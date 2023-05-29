const iconElement = document.querySelector(".weatherIcon");
const tempElement = document.querySelector(".weatherValue p");
const descElement = document.querySelector(".weatherDescription p");

let weather = {};

// By default, set it to Celsius for initial render
weather.temperature = {
    unit: "celsius",
};

const unit = CONFIG.weatherUnit;

const setPosition = () => {
    if (!CONFIG.trackLocation || !navigator.geolocation) {
        if (CONFIG.trackLocation) {
            console.error("Geolocation not available");
        }

        getWeather(
            CONFIG.defaultLatitude,
            CONFIG.defaultLongitude,
            CONFIG.weatherUnit,
            CONFIG.language
        );
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            getWeather(
                pos.coords.latitude.toFixed(3),
                pos.coords.longitude.toFixed(3),
                CONFIG.language,
                CONFIG.weatherUnit
            );
        },
        (err) => {
            console.error(err);
            getWeather(
                CONFIG.defaultLatitude,
                CONFIG.defaultLongitude,
                CONFIG.weatherUnit,
                CONFIG.language
            );
        }
    );
};

const getWeather = (latitude, longitude, unit, language) => {
    // TODO: set baseUrl via variable from config; modify in build step
    // eslint-disable-next-line no-constant-condition
    let baseUrl = false
        ? "http://localhost:3000"
        : "https://api.bento.michaeldemar.co";
    let api = `${baseUrl}/api/weather?latitude=${latitude}&longitude=${longitude}&unit=${unit}&language=${language}`;

    fetch(api)
        .then((response) => {
            let data = response.json();
            return data;
        })
        .then((data) => {
            console.log({ weather: data });
            weather = data;
        })
        .then(() => {
            displayWeather();
        });
};

const displayWeather = () => {
    iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${unit}</span>`;
    descElement.innerHTML = weather.description;
};

setPosition();
