import etheriumIcon from "./images/icon-ethereum.svg";
import clockIcon from "./images/icon-clock.svg";

function InfoContainer() {
  return (
    <div style={myStyles.infoContainer}>
      <div style={myStyles.iconContainer}>
        <img src={etheriumIcon} alt="etherium-icon"></img>
        <p style={(myStyles.iconText, { color: "rgba(0, 255, 248, 1)" })}>
          0.041 ETH
        </p>
      </div>
      <div style={myStyles.iconContainer}>
        <img src={clockIcon} alt="clock-icon"></img>
        <p style={(myStyles.iconText, { color: "rgba(139, 172, 217, 1)" })}>
          3 days left
        </p>
      </div>
    </div>
  );
}

export default InfoContainer;

const myStyles = {
  iconContainer: {
    display: "flex",
    gap: "6px",
    marginLeft: "25px",
    marginRight: "25px",
  },

  infoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
  },

  iconText: {
    fontSize: "15px",
    fontWeight: "400",
  },
};
