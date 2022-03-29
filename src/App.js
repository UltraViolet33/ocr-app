import Header from "./components/Header";
import Input from "./components/Input";
import Ocr from "./components/Ocr";
import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);

  return (
    <div className="App">
      <Header></Header>
      <Input setImage={setImage}></Input>
      <Ocr></Ocr>
    </div>
  );
}

export default App;
