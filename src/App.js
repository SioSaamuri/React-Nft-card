import logo from "./logo.svg";
import "./App.css";
import EquilibriumImage from "./EquilibriumImage";
import InfoContainer from "./Info";
import Userinfo from "./User";

function App() {
  return (
    <div className="main-container">
      <EquilibriumImage />
      <Texts />
      <InfoContainer />
      <Breakline />
      <Userinfo />
    </div>
  );
}

export default App;

function Breakline() {
  return (
    <div
      style={{
        width: "278px",
        height: "2px",
        backgroundColor: "rgba(46, 64, 90, 1)",
        borderRadius: "10px",
        marginBottom: "16px",
      }}
    ></div>
  );
}

function Texts() {
  return (
    <div>
      <h1 style={styles.h1}>Equilibrium #3429</h1>
      <p style={styles.p}>
        Our Equilibrium collection promotes balance and calm.
      </p>
    </div>
  );
}

const styles = {
  h1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: "22px",
    width: "278px",
    marginBottom: "12px",
    marginTop: "24px",
  },
  p: {
    color: "rgba(139, 172, 217, 1)",
    fontSize: "18px",
    width: "278px",
    marginBottom: "16px",
    lineHeight: "26px",
  },
};
