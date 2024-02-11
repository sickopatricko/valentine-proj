import { useState } from "react";
import "./App.css";
import Confetti from "react-confetti";
export default App;

const options = [
  "Nie",
  "Dlaczego nie?",
  "Błagam?",
  "Serio??",
  "Nie rób mi tego",
];

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
      <div>
        <Confetti
          drawShape={ctx => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.3 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
        />
        <div className="gif">
          <img
            className="us"
            src="https://media1.tenor.com/m/ju1buBTwt64AAAAC/spiderverse-across-the-spiderverse.gif"
          />
        </div>
        <h1 className="ending-text">Lets gooo! To bedziemy my 🥹</h1>
      </div>
    );

  return (
    <main>
      <div className="gif">
        <img
          className="spiderman"
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
        onClick={onNo}
        style={{ left: `${leftSize}px`, top: `${topSize}px` }}
      >
        {options[currentIndex]}
      </button>
    </>
  );
}
