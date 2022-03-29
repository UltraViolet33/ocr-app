import { useState } from "react";
import Tesseract from "tesseract.js";
import { createWorker } from "tesseract.js";

import Header from "./components/Header";
import Input from "./components/Input";
import Ocr from "./components/Ocr";
import Image from "./components/Image";

import "./App.css";

function App() {
  const [imagePath, setImagePath] = useState(null);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  const displayText = () => {
    if (imagePath !== null) {
      // setText("Chargement...");
      // Tesseract.recognize(imagePath, "fra", { logger: (m) => console.log(m) })
      //   .then((result) => {
      //     console.log(result.data.text);
      //     setText(result.data.text);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     setText("Inpossible de convertir le texte de l'image");
      //   });
      (async () => {
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const {
          data: { text },
        } = await worker.recognize(imagePath);
        console.log(text);
        setText(text);
        const { data } = await worker.getPDF("Tesseract OCR Result");
        const blob = new Blob([new Uint8Array(data)], {
          type: "application/pdf",
        });

        const url = URL.createObjectURL(blob);
        console.log(url);
        setBtnDisabled(false);
        //  await worker.terminate();
      })();
    } else {
      alert("Uploadez une image !");
    }
  };

  const downloadPDF = () => {};

  return (
    <div className="App">
      <Header></Header>
      <Input setImagePath={setImagePath}></Input>
      <button onClick={displayText}>Afficher le texte</button>
      <button onClick={downloadPDF} disabled={btnDisabled}>
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
