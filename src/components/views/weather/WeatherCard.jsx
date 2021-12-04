
// Framer Motion
import { motion } from "framer-motion";

const WeatherCard = ({ timestamp, maxTemp, minTemp, description, icon }) => {
  const day = new Date(timestamp * 1000)
    .toLocaleDateString("es", {weekday: "long", day: "numeric"})
    .toLocaleUpperCase();

  return (
    <motion.div 
      className="forecast-card" 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "just", duration: 1 }}
    >
      <h4>{day}</h4>
      <img 
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
        alt="icon"       
      />
      <p className="description">{description.toUpperCase()}</p>
      <p>Max: {maxTemp} °C</p>
      <p>Min: {minTemp} °C</p>
    </motion.div>
  )
};

export default WeatherCard