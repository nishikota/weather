const Button = (onClickButton, userInputWord, fetchApi) => {
  return (
    <button
      style={styles.button}
      onClick={() => onClickButton(userInputWord, fetchApi)}
    >
      <div style={styles.word}>Search</div>
    </button>
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
