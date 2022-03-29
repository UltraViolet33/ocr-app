import Header from "./components/Header";
import Input from "./components/Input";
import Ocr from "./components/Ocr";
import Image from "./components/Image";
import { useState } from "react";

function App() {
  const [imagePath, setImagePath] = useState(null);

  return (
    <div className="App">
      <Header></Header>
      <Input setImagePath={setImagePath}></Input>
      <Ocr></Ocr>
      <Image imagePath={imagePath}/>
    </div>
  );
}

export default App;
