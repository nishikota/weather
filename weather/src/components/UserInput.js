import React, {useState} from "react";
import Button from "./Button";

const UserInput = ({searchCity}) => {
  const [userInputWord, setUserInputWord] = useState("");
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
  return (
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
          <Button userInputWord={userInputWord} searchCity={searchCity} />
        ))}
    </div>
  );
};

export default UserInput;

const styles = {
  inputArea: {
    paddingBottom: "4rem",
    textAlign: "center",
  },
  message: {
    fontSize: "1rem",
    marginTop: "3rem",
    opacity: "0.6",
  },
  request: {
    marginRight: "3rem",
    height: "1rem",
    width: "8rem",
  },
  eMessage: {
    fontSize: "0.5rem",
    color: "red",
    margin: "auto",
  },
};
