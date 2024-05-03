import { ImEyeBlocked } from "react-icons/im";
import { useState } from "react";
function App() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("none");
  const handleClick = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
    if (icon === "none") {
      setIcon("block");
    } else {
      setIcon("none");
    }
  };
  return (
    <div className="App">
      <div className="wrapper">
        <div className="input-fields">
          <span onClick={handleClick}>
            <ImEyeBlocked style={{ fontSize: "30px" }} />
          </span>
          <input type={type} />
        </div>
      </div>
    </div>
  );
}

export default App;
