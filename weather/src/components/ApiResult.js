import React, {useState, useEffect} from "react";
import countryCity from "../api/countryCity";
import {fetchApi} from "../api/GetApi";
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

//ApiResult

export const ApiResult = () => {
  const [weatherData, setWeatherData] = useState({});
  const [userInputWord, setUserInputWord] = useState("");

  useEffect(async () => {
    const ResponseObject = await fetchApi();
    setWeatherData(ResponseObject);
  }, []);
  //UserInput
  const inputWord = (word) => {
    const character = /^[a-zA-Z]*$/;
    try {
      if (word.target.value === "" || character.test(word.target.value)) {
        setUserInputWord(word.target.value);
      } else {
        throw new Error("syntaxError");
      }
    } catch (e) {
      setUserInputWord(e.message);
    }
  };
  // onClickButton
  const onClickButton = async (userInputWord, fetchApi) => {
    console.log(userInputWord);
    try {
      if (countryCity.includes(userInputWord)) {
        const fetchResponseObject = await fetchApi(userInputWord);
        setWeatherData(fetchResponseObject);
        console.log("success");
      } else {
        throw new Error("error:nodata");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(weatherData);
  let whichIcon;
  if (weatherData && weatherData.weather) {
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
  }
  return (
    <>
      {/* UserInput */}
      <div className="inputArea" style={styles.inputArea}>
        <p style={styles.message}>Where do you want to know the weather?</p>
        <input
          type="text"
          placeholder="Tokyo"
          onChange={inputWord}
          style={styles.request}
        />
        {(userInputWord === "syntaxError" && (
          <p style={styles.eMessage}>
            入力エラー：アルファベットで入力してください
          </p>
        )) ||
          (userInputWord !== "syntaxError" && (
            // Button
            <>
              <button
                style={styles.button}
                onClick={() => onClickButton(userInputWord, fetchApi)}
              >
                <div style={styles.word}>Search</div>
              </button>
              <div>
                {(userInputWord === "" && (
                  <p>
                    お探しの国または都市名をアルファベットで入力してください。
                  </p>
                )) ||
                  (countryCity.includes(userInputWord) && (
                    <p>検索結果はこちらになります。</p>
                  )) || (
                    <p>
                      エラー：その国またが都市のデータはありません。入力内容をご確認ください。
                    </p>
                  )}
              </div>
            </>
            //
          ))}
      </div>
      {/*  */}
      {weatherData && weatherData.weather && (
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
          <div style={styles.name}>{weatherData.name}</div>
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
      )}
    </>
  );
};

// export default ApiResult;

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
