import { useState } from "react";
import data from "./data";
function App() {
  const [getCount, setCount] = useState(0);
  const [getText, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(getCount);
    setText(data);
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
