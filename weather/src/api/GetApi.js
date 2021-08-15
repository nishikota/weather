import axios from "axios";
import ApiKey from "../Secret";

const API_END_POINT = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeather = async (word) => {
  const response = await axios.get(
    word === undefined || word === ""
      ? `${API_END_POINT}?q=Tokyo&appid=${ApiKey}`
      : `${API_END_POINT}?q=${word}&appid=${ApiKey}`
  );
  const fetchResponseObject = response.data;
  return fetchResponseObject;
};

export const fetchApi = fetchWeather;
