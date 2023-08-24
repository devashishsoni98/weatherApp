import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import "./darkTheme.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const apiKey = "cc794c3f85102a88f7c8dbd5b06f620e";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  // useEffect(()=>{
  //   getWetherDetails("delhi")
  // }, [])

  return (
    <div className={`col-md-12 divv ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="wetherBg">
      <button className="btn button-s" type="button" onClick={toggleTheme}>
      {isDarkTheme ?  <RiMoonClearLine /> : <RiSunLine />}
          </button>
        <h1 className="heading">Check Weather Now!</h1>

        <div className="logo">DS</div> 

        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a City name"
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button className="btn button" type="button" onClick={handleSearch}>
            Search
          </button>
          
        </div>
        {Object.keys(data).length > 0 && (
          <div className="col-md-12 text-center mt-5">
            <div className=" wetherResultBox">
              <img
                className="weathorIcon"
                src="https://cdn.pixabay.com/photo/2017/12/06/05/19/sun-3000986_1280.png"
              />

              <h5 className="weathorCity">{data?.name}</h5>
              <h6 className="weathorTemp">
                Temprature <BiSolidRightArrowAlt className="icon" />{" "}
                {(data?.main?.temp - 273.15).toFixed(1)}°C
              </h6>
              <h6 className="weathorTemp">
                Feels Like <BiSolidRightArrowAlt className="icon" />{" "}
                {(data?.main?.feels_like - 273.15).toFixed(1)}°C
              </h6>
              <h6 className="weathorTemp">
                Weather <BiSolidRightArrowAlt className="icon" />{" "}
                {/* {data?.main?.humidity}% */}
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
