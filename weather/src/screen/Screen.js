import {ApiResult} from "../components/ApiResult";

const Screen = () => {
  return (
    <div style={styles.allPage}>
      <div className="header" style={styles.header}>
        <div style={styles.title}>Weather Checker</div>
        <p style={styles.subTitle}>Do you know the weather in your city ? </p>
      </div>
      <ApiResult />
    </div>
  );
};
export default Screen;

const styles = {
  allPage: {
    flex: 1,
    height: "100vh",
    margin: 0,
  },
  header: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
    color: "blue",
  },
  title: {
    fontSize: "2.3rem",
    marginLeft: "2rem",
    marginBottom: "2rem",
    marginTop: "1rem",
  },
  subTitle: {
    fontSize: "1rem",
    marginRight: "2rem",
    marginTop: "2.4rem",
    marginBottom: "2rem",
  },
};
