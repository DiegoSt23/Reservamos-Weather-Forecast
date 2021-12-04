import { useState, useEffect } from "react";

// React Router
import { useParams, useNavigate } from "react-router";

// Requests
import { getCityWeather } from "../../../services/apiRequests";

// Components
import WeatherCard from "./WeatherCard";

// Icons
import { IoReturnUpBackOutline } from "react-icons/io5";

// Framer Motion
import { motion } from "framer-motion";

const Weather = () => {
  const navigate = useNavigate();
  const { city, state, country, lat, long } = useParams();
  const key = "a5a47c18197737e8eeca634cd6acb581";
  const [weatherForecast, setWeatherForecast] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const res = await getCityWeather(lat, long, key);
        setWeatherForecast(res.data.daily);
      } catch (error) {
        console.log(error.message);
      }
    };
    func();
  }, [lat, long]);

  const forecastPerDayList = weatherForecast.map((item, index) => (
    <WeatherCard
      key={index}
      timestamp={item.dt}
      maxTemp={item.temp.max}
      minTemp={item.temp.min}
      description={item.weather[0].description}
      icon={item.weather[0].icon}
    />
  ));

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <motion.div
      className="weather-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "just", duration: 0.5 }}
    >
      <section className="info-nav-container">
        <div className="city-info">
          <h2>{city}</h2>
          <h3>{state}</h3>
          <h4>{country}</h4>
        </div>
        <IoReturnUpBackOutline className="return-icon" onClick={handleReturn} />
      </section>
      <section className="forecast-container">
        {forecastPerDayList}
      </section>
    </motion.div>
  );
};

export default Weather;
