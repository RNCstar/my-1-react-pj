import { useState } from "react";
import data from "./data";
function App() {
  const [getCount, setCount] = useState(0);
  const [getText, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(getCount);
    console.log(getCount);
    if (getCount <= 0 || getCount > 4) {
      alert("Please enter a count between 0 and 4");
    }
    if (getCount <= 0) {
      amount = 1;
    } else if (getCount > 4) {
      amount = 4;
    }
    setText(data.slice(0, amount));
  };
  return (
    <div className="App section-center">
      <h4>لورم ساز ما </h4>
      <form className="lorem" onSubmit={handleSubmit}>
        <lable id="LoremNO">تعداد پاراگراف</lable>
        <input
          type="number"
          name="total"
          value={getCount}
          onChange={(elem) => setCount(elem.target.value)}
        />
        <button type="submit" className="makeIt">
          بساز
        </button>
      </form>
      <article className="lorem-text-box">
        {getText.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </div>
  );
}

export default App;
