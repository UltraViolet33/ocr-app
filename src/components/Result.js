import Ocr from "./Ocr";
import Image from "./Image";

const Result = ({ imagePath, text, percent, status, confidence }) => {
  return (
    <div className="flex">
      <div>
        <Image imagePath={imagePath} />
      </div>
      <div style={{ width: "50%" }}>
        <Ocr
          text={text}
          percent={percent}
          status={status}
          confidence={confidence}
        />
      </div>
    </div>
  );
};

export default Result;
