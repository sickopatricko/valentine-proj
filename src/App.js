import { useState } from "react";
import "./App.css";
export default App;

const options = ["Nie", "Dlaczego nie?", "Błagam?", "Nie rób mi tego"];
const options2 = ["Tak", "Tak", "Tak", "Nahh ima do my own thing"];

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

function Main() {
  const [yesPressed, setYesPressed] = useState(false);
  if (yesPressed)
    return (
      <main>
        <div className="gif">
          <img src="https://media1.tenor.com/m/ju1buBTwt64AAAAC/spiderverse-across-the-spiderverse.gif" />
        </div>
        <h1 className="text">Lets gooo! To bedziemy my 🥹</h1>
      </main>
    );

  return (
    <main>
      <div className="gif">
        <img
          width={300}
          height={300}
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzBjejdoeHczOTBtcWdleDhlYzB6YXp5dWdlNGlvcHAzYnFsbGF4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X23pjaOFiyH3G/giphy.gif"
        />
      </div>
      <h1 className="text">Zostaniesz moją walentynką?</h1>
      <div className="btns">
        <Button yesPressed={yesPressed} setYesPressed={setYesPressed} />
      </div>
    </main>
  );
}

function Button({ yesPressed, setYesPressed }) {
  const [topSize, setTopSize] = useState(1);
  const [leftSize, setLeftSize] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  function onNo() {
    const movingleft = Math.min(Math.random() * 500) + -300;
    const movingright = Math.min(Math.random() * 500) + -300;
    setTopSize(topSize + movingright);
    setLeftSize(leftSize + movingleft);

    if (currentIndex < options.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <>
      <button className="yes" onClick={() => setYesPressed(true)}>
        Tak
      </button>
      <button
        className="no"
        onMouseOver={onNo}
        style={{ left: `${leftSize}px`, top: `${topSize}px` }}
      >
        {options[currentIndex]}
      </button>
    </>
  );
}
