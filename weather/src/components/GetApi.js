// import axios from "axios";
import React, {useState, useEffect} from "react";
import ApiKey from "../Secret";
import testData from "../api/testData.js";
import ApiResult from "./ApiResult";

const API_END_POINT = "https://api.openweathermap.org/data/2.5/weather";

const GetApi = ({searchWord}) => {
  const [results, setResult] = useState();

  const fetchWeather = async (word) => {
    console.log(word);
    // const response = await axios.get(
    // word === ""
    //   ? `${API_END_POINT}?q=Tokyo&appid=${ApiKey}`
    //   : `${API_END_POINT}?q=${word}&appid=${ApiKey}`
    // );
    // const data = response.data;
    const data = await testData;
    setResult(data);
  };
  // useEffect(() => {
  fetchWeather(searchWord);
  // }, [searchWord]);
  return (
    <>
      <ApiResult results={results} />
    </>
  );
};

export default GetApi;
