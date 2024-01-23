import "./App.css";
import phrases from "./utils/phrases.json";
import RandomPhrase from "./components/RandomPhrase";
import ButtonPhrase from "./components/ButtonPhrase";
import randomIndex from "./services/randomIndex";
import { useState } from "react";
import bgArray from "./utils/bgArray.json";

function App() {
  const sentence = randomIndex(phrases);
  const bgIndex = randomIndex(bgArray);

  const [quote, setQuote] = useState(sentence);
  const [bgApp, setBgApp] = useState(bgIndex);

  const bgStyle = {
    backgroundImage: `url('../assets/fondo${bgApp}.jpg')`,
  };

  return (
    <div className="app" style={bgStyle}>
      <h1 className="title">
        GALLETAS DE LA FORTUNA
      </h1>
      <article className="article__phrase">
        <RandomPhrase
          quote={quote}
        />
      </article>
      <div>
        <ButtonPhrase
          setQuote={setQuote}
          setBgApp={setBgApp}
        />
      </div>
    </div>
  );
}

export default App;
