import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);

  return (
    <div className="App">
      <Header></Header>
      <Input setImage={setImage}></Input>
    </div>
  );
}

export default App;
