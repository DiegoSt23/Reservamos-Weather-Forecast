import "./sass/main.css";
import { useState, useEffect } from "react";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Requests
import { getCity } from "./services/apiRequests";

//  Components
import Header from "./components/views/header/Header";
import Results from "./components/views/results/Results";
import Weather from "./components/views/weather/Weather";
import Error from "./components/views/error/Error";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    if (search) {
      const func = async () => {
        try {
          const res = await getCity(search);
          setResults(res.data.filter((item) => item.result_type === "city"));
        } catch (error) {
          console.log(error);
        }
      };
      func();
    }
  }, [search]);

  return (
    <div className="main-container">
      <Router>
        <Header setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Results results={results} />} />
          <Route
            path="/:city/:state/:country/weather/:lat/:long"
            element={<Weather />}
          />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
