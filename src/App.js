import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import "./darkTheme.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const apiKey = process.env.REACT_APP_WEATHER_API;
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  const [key, setKey] = useState(0); 

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        setData(res.data);
        setInputCity("");
        setKey((prevKey) => prevKey + 1);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  const handleRemoveResult = () => {
    setData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`col-md-12 divv ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="wetherBg">
        <button className="btn button-s" type="button" onClick={toggleTheme}>
          {isDarkTheme ? <RiMoonClearLine /> : <RiSunLine />}
        </button>
        <h1 data-aos="zoom-in" data-aos-duration="600" className="heading">
          Check Weather Now!
        </h1>

        <div data-aos="zoom-in" data-aos-duration="600" className="logo">
          DS
        </div>

        <form
          data-aos="zoom-in"
          data-aos-duration="600"
          className="d-grid gap-3 col-4 mt-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter a City name"
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button className="btn button" type="submit">
            Search
          </button>
        </form>
        {Object.keys(data).length > 0 && (
          <div
            className="col-md-12 text-center mt-5"
            data-aos="flip-left"
            data-aos-duration="1000"
            key={key} 
          >
            <div className="wetherResultBox">
              <img
                className="weathorIcon"
                src="https://cdn.pixabay.com/photo/2017/12/06/05/19/sun-3000986_1280.png"
              />
              <button className="btn btn-remove" onClick={handleRemoveResult}>
                <ImCross />
              </button>

              <h5 className="weathorCity" data-aos="flip-left">
                {data?.name}
              </h5>
              <h6 className="weathorTemp">
                Temperature <BiSolidRightArrowAlt className="icon" />{" "}
                {(data?.main?.temp - 273.15).toFixed(1)}°C
              </h6>
              <h6 className="weathorTemp">
                Feels Like <BiSolidRightArrowAlt className="icon" />{" "}
                {(data?.main?.feels_like - 273.15).toFixed(1)}°C
              </h6>
              <h6 className="weathorTemp">
                Weather <BiSolidRightArrowAlt className="icon" />{" "}
                {data?.weather?.[0]?.main}
              </h6>
              <h6 className="weathorTemp">
                Humidity <BiSolidRightArrowAlt className="icon" />{" "}
                {data?.main?.humidity}%
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
