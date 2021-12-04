// Components
import CityCard from "./CityCard";

const Results = ({ results }) => {
  const resultsList = results?.map((item, index) => (
    <CityCard
      key={index}
      cityName={item.city_name}
      state={item.state}
      country={item.country}
      lat={item.lat}
      long={item.long}
    />
  ));

  return (
    <div className="results-container">
      {results.length > 0 && resultsList}
    </div>
  );
};

export default Results;
