import { createWorker } from "tesseract.js";
import { saveAs } from "file-saver";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Ocr from "./components/Ocr";
import Image from "./components/Image";
import "./App.css";

function App() {

  //STATES
  const [imagePath, setImagePath] = useState(null);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [url, setUrl] = useState("");

  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  //display text from image
  const displayText = () => {
    if (imagePath !== null) {
      (async () => {
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const {
          data: { text },
        } = await worker.recognize(imagePath);

        setText(text);
        const { data } = await worker.getPDF("Tesseract OCR Result");
        const blob = new Blob([new Uint8Array(data)], {
          type: "application/pdf",
        });

        const url = URL.createObjectURL(blob);
        setUrl(url);
        setBtnDisabled(false);
        await worker.terminate();
      })();
    } else {
      alert("Uploadez une image !");
    }
  };

  //create pdf file
  const saveFile = (url) => {
    saveAs(url, "example.pdf");
  };

  return (
    <div className="App">
      <Header></Header>
      <Input setImagePath={setImagePath}></Input>
      <button onClick={displayText}>Afficher le texte</button>
      <button onClick={() => saveFile(url)} disabled={btnDisabled}>
        Télécharger le PDF
      </button>
      <div className="flex">
        <div>
          <Image imagePath={imagePath} />
        </div>
        <div style={{ width: "50%" }}>
          <Ocr text={text} />
        </div>
      </div>
    </div>
  );
}

export default App;
