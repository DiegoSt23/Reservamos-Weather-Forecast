// React Router
import { Link } from "react-router-dom";

// Framer Motion
import { motion } from "framer-motion";

const CityCard = ({ cityName, state, country, lat, long }) => {
  return (
    <div className="card-container">
      <Link to={`${cityName}/${state}/${country}/weather/${lat}/${long}`} className="link">
        <motion.figure
          className="city-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "just", duration: 0.3 }}
        >
          <h2>{cityName}</h2>
          <h3>{state}</h3>
          <h4>{country}</h4>
        </motion.figure>
      </Link>
    </div>
  );
};

export default CityCard;
