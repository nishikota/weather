const UserInput = (inputWord) => {
  console.log(inputWord);
  return (
    <input
      type="text"
      placeholder="Tokyo"
      onChange={inputWord}
      style={styles.request}
    />
  );
};
export default UserInput;

const styles = {
  request: {
    marginRight: "3rem",
    height: "1rem",
    width: "8rem",
  },
};
