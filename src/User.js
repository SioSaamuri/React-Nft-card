import { findByLabelText } from "@testing-library/react";
import userIcon from "./images/image-avatar.png";

function Userinfo() {
  return (
    <div style={myStyles.userInfo}>
      <img src={userIcon} alt="user-avatar" style={myStyles.userIcon}></img>
      <p style={myStyles.userP}>
        Creation of <span style={myStyles.userSpan}>Jules Wyvern</span>
      </p>
    </div>
  );
}

export default Userinfo;

const myStyles = {
  userInfo: {
    width: "278px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  userIcon: {
    width: "33px",
    height: "33px",
    border: "1px solid white",
    borderRadius: "50%",
  },

  userP: {
    color: "rgba(139, 172, 217, 1)",
    fontSize: "15px",
  },
  userSpan: {
    color: "white",
    fontSize: "15px",
  },
};
