import axios from "axios";
import ApiKey from "../Secret";
// import testData from "../api/testData.js";

const API_END_POINT = "https://api.openweathermap.org/data/2.5/weather";

let firstResponseObject;
const firstData = async (word) => {
  console.log("firstData");
  const response = await axios.get(
    `${API_END_POINT}?q=${word}&appid=${ApiKey}`
  );
  firstResponseObject = await response.data;
  // firstResponseObject = await testData;
  console.log(firstResponseObject);
};
firstResponseObject || firstData("Tokyo");
console.log(firstResponseObject);

let fetchResponseObject;
const fetchWeather = async (word) => {
  console.log("fetchData:", word);
  const response = await axios.get(`${API_END_POINT}?q=Tokyo&appid=${ApiKey}`);
  fetchResponseObject = await response.data;
};

export const tokyoData = firstResponseObject;
export const fetchApi = fetchWeather;
export const fetchData = fetchResponseObject;
