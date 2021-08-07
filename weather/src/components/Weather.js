import {useState} from "react";
import UserInput from "./UserInput";
import GetApi from "./GetApi";

const Weather = () => {
  const [searchWord, setSearchWord] = useState("");
  const searchCity = (inputWord) => {
    setSearchWord(inputWord);
  };
  return (
    <>
      <UserInput searchCity={searchCity} />
      <GetApi searchWord={searchWord} />
    </>
  );
};
export default Weather;
