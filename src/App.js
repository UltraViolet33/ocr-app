import { useState } from "react";
import Tesseract from "tesseract.js";

import Header from "./components/Header";
import Input from "./components/Input";
import Ocr from "./components/Ocr";
import Image from "./components/Image";

import "./App.css";

function App() {
  const [imagePath, setImagePath] = useState(null);
  const [text, setText] = useState(null);

  return (
    <div className="App">
      <Header></Header>
      <Input setImagePath={setImagePath}></Input>
      <button>Afficher le texte</button>
      <div className="flex">
        <div>
          <Image imagePath={imagePath} />
        </div>
        <div>
          <Ocr text={text} />
        </div>
      </div>
    </div>
  );
}

export default App;
