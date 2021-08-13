import React, {useState, useEffect} from "react";
import {
  clearSky,
  drizzle,
  fewClouds,
  mist,
  overcastClouds,
  rain,
  showerRain,
  snow,
  thunderstorm,
} from "../images/index";
import {
  FaRegSun,
  FaRegSnowflake,
  FaUmbrella,
  FaCloud,
  FaRegEyeSlash,
} from "react-icons/fa";
import {tokyoData, fetchData} from "../api/GetApi";

const ApiResult = () => {
  console.log(tokyoData, ":", fetchData);
  // const [weatherData, setWeatherData] = useState();
  // if (fetchData) {
  //   console.log("fetch");
  //   setWeatherData(fetchData);
  // } else {
  //   console.log("first");
  //   setWeatherData(tokyoData);
  // }
  // console.log(weatherData);
  // console.log(tokyoData);
  let weatherData;
  if (fetchData) {
    weatherData = fetchData;
  } else {
    weatherData = tokyoData;
  }
  let whichIcon;
  if (weatherData.weather[0].main === "Clouds") {
    whichIcon = <FaCloud style={styles.icons} />;
  } else if (weatherData.weather[0].main === "Clear") {
    whichIcon = <FaRegSun style={styles.icons} />;
  } else if (weatherData.weather[0].main === "Rain") {
    whichIcon = <FaUmbrella style={styles.icons} />;
  } else if (weatherData.weather[0].main === "Snow") {
    whichIcon = <FaRegSnowflake style={styles.icons} />;
  } else if (
    weatherData.weather[0].main !== ("Clear" || "Clouds" || "Rain" || "Snow")
  ) {
    whichIcon = <FaRegEyeSlash style={styles.icons} />;
  }
  return (
    <>
      <div
        className="apiResultArea"
        style={
          (weatherData.weather[0].main === "Clouds" &&
            Object.assign({}, styles.backImage, styles.overcastClouds)) ||
          (weatherData.weather[0].main === "Clear" &&
            Object.assign({}, styles.backImage, styles.clearSky)) ||
          (weatherData.weather[0].main === "Rain" &&
            Object.assign({}, styles.backImage, styles.rain)) ||
          (weatherData.weather[0].main === "Snow" &&
            Object.assign({}, styles.backImage, styles.snow)) ||
          (weatherData.weather[0].main !==
            ("Clear" || "Clouds" || "Rain" || "Snow") &&
            Object.assign({}, styles.backImage, styles.mist))
        }
      >
        <div style={styles.name}>
          {console.log("fetch")}
          {weatherData.name}
        </div>
        <div style={styles.results}>
          <ul style={styles.ul}>
            <li style={styles.title}>Weather</li>
            <li style={styles.result}>
              {weatherData.weather[0].description}
              {whichIcon}
            </li>
          </ul>
          <ul style={styles.ul}>
            <li style={styles.title}>Temperature</li>
            <li
              style={
                (weatherData.main.temp - 273.15 <= 15 &&
                  Object.assign({}, styles.result, styles.lowTemp)) ||
                (weatherData.main.temp - 273.15 >= 25 &&
                  Object.assign({}, styles.result, styles.highTemp)) ||
                Object.assign({}, styles.result, styles.middleTemp)
              }
            >
              {Math.floor((weatherData.main.temp - 273.15) * 10) / 10} ℃
            </li>
          </ul>
          <ul style={styles.ul}>
            <li style={styles.title}>Wind</li>
            <li style={styles.result}>{weatherData.wind.speed}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ApiResult;
const styles = {
  results: {
    display: "flex",
    justifyContent: "space-around",
    marginRight: "auto",
    marginLeft: "5rem",
  },
  name: {
    fontSize: "3rem",
    marginLeft: "2rem",
    marginBottom: "5rem",
    marginTop: "3rem",
    color: "black",
  },
  ul: {
    listStyle: "none",
  },
  lowTemp: {
    color: "rgb(90,90,250)",
  },
  middleTemp: {
    color: "green",
  },
  highTemp: {
    color: "red",
  },
  title: {
    fontSize: "1.3rem",
    marginRight: "4rem",
  },
  result: {
    marginTop: "3rem",
    marginLeft: "3rem",
    fontSize: "2.5rem",
    marginBottom: "2rem",
  },
  icons: {
    color: "white",
    marginLeft: "1rem",
  },
  backImage: {
    backgroundSize: "cover",
    background: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    marginBottom: "2rem",
  },
  clearSky: {
    backgroundImage: `url(${clearSky})`,
  },
  fewClouds: {
    backgroundImage: `url(${fewClouds})`,
  },
  overcastClouds: {
    backgroundImage: `url(${overcastClouds})`,
  },
  drizzle: {
    backgroundImage: `url(${drizzle})`,
  },
  rain: {
    backgroundImage: `url(${rain})`,
  },
  showerRain: {
    backgroundImage: `url(${showerRain})`,
  },
  thunderstorm: {
    backgroundImage: `url(${thunderstorm})`,
  },
  snow: {
    backgroundImage: `url(${snow})`,
  },
  mist: {
    backgroundImage: `url(${mist})`,
  },
};
