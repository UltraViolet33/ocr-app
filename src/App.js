import { createWorker } from "tesseract.js";
import { saveAs } from "file-saver";
import { useState } from "react";
import Header from "./components/Header";
import WebcamCapture from "./components/WebcamCapture";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
import "./App.css";

function App() {
  //STATES
  const [imagePath, setImagePath] = useState(null);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [url, setUrl] = useState("");
  const [webcam, setWebcam] = useState(false);
  const [percent, setPercent] = useState(0);

  const worker = createWorker({
    logger: (m) => {
      // console.log(m);
      if (m.status === "loading tesseract core") {
        setPercent(0.2);
      } else if (m.status === "initialized tesseract") {
        setPercent(0.3);
      } else if (m.status === "loading langage traineddata") {
        setPercent(0.4);
      } else if (m.status === "initialized api") {
        setPercent(0.5);
      } else if (m.status === "recognizing text") {
        setPercent(m.progress / 2 + 0.5);
      }
    },
  });

  //display text from image
  const displayText = () => {
    if (imagePath !== null) {
      setText("Chargement...");
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

  const method = () => {
    setWebcam(!webcam);
    setImagePath(null);
    setText("");
    setBtnDisabled(true);
    setUrl("");
  };

  return (
    <div className="App">
      <Header></Header>
      <button onClick={method}>
        {webcam ? "Utiliser formulaire" : "Utiliser webcam"}
      </button>
      {webcam ? (
        <WebcamCapture setImagePath={setImagePath} />
      ) : (
        <Input setImagePath={setImagePath}></Input>
      )}
      <Buttons
        displayText={displayText}
        saveFile={saveFile}
        url={url}
        btnDisabled={btnDisabled}
      />
      <Result imagePath={imagePath} text={text} percent={percent}></Result>
    </div>
  );
}

export default App;
