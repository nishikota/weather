const Button = ({onClickButton, tempSwitch}) => {
  return (
    <button
      style={
        (onClickButton && styles.searchButton) ||
        (tempSwitch && styles.changeButton)
      }
      onClick={(onClickButton, tempSwitch)}
    >
      <div style={styles.word}>
        {(onClickButton && "Search") || (tempSwitch && "change")}
      </div>
    </button>
  );
};

export default Button;
const styles = {
  searchButton: {
    width: "3rem",
    height: "1.4rem",
    borderRadius: 100,
  },
  changeButton: {
    width: "3rem",
    height: "2rem",
    backgroundColor: "black",
    color: "white",
    borderRadius: "100",
  },
  word: {
    fontSize: "0.5rem",
  },
};
