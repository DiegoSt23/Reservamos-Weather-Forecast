import axios from "axios";

const getCity = async (query) => {
  const promise = await axios ({
    method: "GET",
    url: `https://search.reservamos.mx/api/v2/places?q=${query}`
  });
  return promise
};

const getCityWeather = async (lat, long, key) => {
  const promise = await axios ({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=metric&lang=es&appid=${key}`
  });
  return promise
}

export { getCity, getCityWeather }