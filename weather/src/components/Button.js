import countryCity from "../api/countryCity";
import {fetchApi} from "./ApiResult";

const onClickButton = (userInputWord, fetchApi) => {
  console.log(userInputWord);
  try {
    if (countryCity.includes(userInputWord) || userInputWord === "") {
      fetchApi(userInputWord);
      console.log("success");
    } else {
      throw new Error("error:nodata");
    }
  } catch (e) {
    console.log(e.message);
  }
};

const Button = ({userInputWord}) => {
  return (
    <>
      <button
        style={styles.button}
        onClick={() => onClickButton(userInputWord, fetchApi)}
      >
        <div style={styles.word}>Search</div>
      </button>
      <div>
        {(userInputWord === "" && (
          <p>お探しの国または都市名をアルファベットで入力してください。</p>
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
  );
};

export default Button;
const styles = {
  button: {
    width: "3rem",
    height: "1.4rem",
    borderRadius: 100,
  },
  word: {
    fontSize: "0.5rem",
  },
};
