const fetch = require("node-fetch");

const KELVIN = 273.15;
const key = process.env.WEATHER_API_KEY;

/**
 * Fetch the weather via OpenWeather.
 *
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} unit either C or F
 * @param {string} language "en" for English
 * @returns {Promise<object>}
 */
const getWeather = async (latitude, longitude, unit, language) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${language}&appid=${key}`;

    const response = await fetch(api);
    if (response.status !== 200) {
        console.error({
            timestamp: new Date(),
            response,
        });

        return {
            temperature: {
                unit: unit === "C" ? "celsius" : "fahrenheit",
                value: null,
            },
            description: "",
            iconId: null,
        };
    }

    const data = await response.json();
    console.log({
        timestamp: new Date(),
        data,
    });

    const celsius = Math.floor(data.main.temp - KELVIN);
    return {
        temperature: {
            unit: unit === "C" ? "celsius" : "fahrenheit",
            value: unit === "C" ? celsius : (celsius * 9) / 5 + 32,
        },
        description: data.weather[0].description,
        iconId: data.weather[0].icon,
    };
};

module.exports = {
    getWeather,
};
